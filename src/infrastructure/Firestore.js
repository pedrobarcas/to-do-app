import {
  collection,
  addDoc,
  doc,
  setDoc,
  getDoc,
  getDocFromCache,
  getDocs,
  updateDoc,
  deleteDoc,
  query,
  getDocsFromCache,
  where,
} from "firebase/firestore";

/**
 * Classe responsável pela infraestrutura gerenciada pelo Firestore
 * --
 * Salva, remove, edita, procura dados de uma determinada coleção
 *
 * @version 1.0.0
 * @example const firestore = new Firestore(db, "group")
 * @module infraestrutura/Firestore
 */

export class Firestore {
  /**
   * Estabelece uma comunicação abstrata entre um coleção
   * --
   * @property {Object} db - Instãncia da inicialização da conexão como Banco de dados do Firebase
   * @property {String} collectionName - Nome de uma coleção específica
   * @property {Object} userCached - Dados cacheados do usúario autenticado
   * @constructor
   */
  constructor(db, collectionName) {
    this.db = db;
    this.collectionName = collectionName;
    this.userCached = JSON.parse(localStorage.getItem("userCached"));
  }

  /**
   * Função destinada a retornar uma referência a uma coleção
   * --
   *
   * @returns {collection} retora uma referência de uma coleção
   */
  colRef() {
    return collection(this.db, this.collectionName);
  }

  /**
   * Função destinada a retornar uma referência de documento
   * --
   *
   * @param {UUID} id - Um identificador único
   * @returns {collection} - Uma referência a um documento
   */
  docRef(id) {
    return doc(this.db, this.collectionName, String(id));
  }

  /**
   * Função destinada a retornar objetos de um usuário específico
   * --
   *
   * @returns {Array} lista de objetos do banco de dados
   * @async
   */
  async load(cached = false) {
    const q = query(this.colRef(), where("user_id", "==", this.userCached.uid));
    if (cached) {
      const snapshot = await getDocsFromCache(q);
      return snapshot.docs.map((d) => ({ id: d.id, ...d.data() }));
    }

    const snapshot = await getDocs(q);

    return snapshot.docs.map((d) => ({ id: d.id, ...d.data() }));
  }

  /**
   * Sobrescreve ou ou cria novos dados no banco de dados
   * --
   *
   * @param {Object} obj - Um objeto abstraído
   * @returns {Object} retorna o objeto criado ou nada
   * @async
   */
  async save(obj) {
    try {
      const payload = obj;
      if (payload.id) {
        const ref = this.docRef(payload.id);
        await setDoc(ref, payload, { merge: false });
        return { id: payload.id, ...payload };
      } else {
        const ref = await addDoc(this.colRef(), payload);

        const created = { id: ref.id, ...payload };
        await setDoc(ref, created, { merge: true });
        return created;
      }
    } catch (e) {
      console.log(e);
    }
  }

  /**
   * Edita um documento no banco de dados
   * --
   * Recebe apenas os valores de edição, onde o uníco valor não alterado
   * é o ID - usado para a edição
   * @param {Object} obj - Um objeto abstraído
   * @returns {Object} O novo objeto alterado
   * @async
   */

  async edit(obj) {
    if (!obj.id) throw new Error("edit: missing id");
    const payload = obj;
    const ref = this.docRef(payload.id);
    await updateDoc(ref, payload);
    return { id: payload.id, ...payload };
  }

  /**
   * Remove um objeto no banco de dados
   * --
   *
   * @param {Object} objOrId - Recebe um objeto ou um identificador único
   * @returns {UUID} - O identificador do objeto removido
   * @async
   */

  async remove(objOrId) {
    const id = typeof objOrId === "object" ? objOrId.id : objOrId;
    if (!id) throw new Error("remove: missing id");
    const ref = this.docRef(id);
    await deleteDoc(ref);
    return id;
  }

  /**
   * Procura por um objeto no banco de dados pelo id
   * --
   *
   * @param {UUID} id - Identificador único do objeto
   * @returns {Object}
   */

  async find(id) {
    const ref = this.docRef(id);
    let snapshot;
    try {
      snapshot = await getDocFromCache(ref);
    } catch {
      snapshot = await getDoc(ref);
    }

    return snapshot.exists() ? { id: snapshot.id, ...snapshot.data() } : null;
  }
}
