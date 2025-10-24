import {
  collection,
  addDoc,
  doc,
  setDoc,
  getDoc,
  getDocs,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";

export class FirestoreAdapter {
  constructor(db, collectionName) {
    this.db = db;
    this.collectionName = collectionName;
  }

  colRef() {
    return collection(this.db, this.collectionName);
  }

  docRef(id) {
    return doc(this.db, this.collectionName, String(id));
  }

  async load() {
    const snapshot = await getDocs(this.colRef());
    // sempre retornar array de objetos normalizados
    return snapshot.docs.map((d) => ({ id: d.id, ...d.data() }));
  }

  // Se obj.id existir: setDoc(com id). Se não: addDoc()
  async save(obj) {
    const payload = sanitizeForFirestore(obj);
    console.log(obj);

    try {
      if (payload.id) {
        // garante string
        const ref = this.docRef(payload.id);
        await setDoc(ref, payload, { merge: false }); // overwrite / save behavior
        return { id: payload.id, ...payload };
      } else {
        const ref = await addDoc(this.colRef(), payload);
        // opcional: atualizar o documento com o próprio id dentro do doc
        const created = { id: ref.id, ...payload };
        await setDoc(ref, created, { merge: true });
        return created;
      }
    } catch (e) {
      console.log(e);
    }
  }

  async edit(obj) {
    if (!obj.id) throw new Error("edit: missing id");
    const payload = sanitizeForFirestore(obj);
    const ref = this.docRef(payload.id);
    await updateDoc(ref, payload);
    return { id: payload.id, ...payload };
  }

  async remove(objOrId) {
    const id = typeof objOrId === "object" ? objOrId.id : objOrId;
    if (!id) throw new Error("remove: missing id");
    const ref = this.docRef(id);
    await deleteDoc(ref);
    return id;
  }

  async find(idOrField) {
    // Se passar string/uuid, tratar como find by id
    if (typeof idOrField === "string" && idOrField.includes("-")) {
      const ref = this.docRef(idOrField);
      const snap = await getDoc(ref);
      return snap.exists() ? { id: snap.id, ...snap.data() } : null;
    }

    // Se passar objeto { field, value } ou (field, value) poderia criar query — simples aqui:
    // implementa conforme necessidade (query where)
    return null;
  }
}
