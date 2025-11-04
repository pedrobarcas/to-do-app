import { Firestore } from "./Firestore";
import { where, getDocs, query, orderBy } from "firebase/firestore";

/**
 * Classe abstraída do Firestore
 * --
 * Reponsável pela especialização com Tarefas
 *
 * @version 1.0.0
 *
 * @example const taskFirestore = new TaskFirestore(db, "task")
 * @module infraestrutura/taskFirestore
 */

export class TaskFirestore extends Firestore {
  /**
   * Responsável por instanciar as propriedades nécessarias para o uso
   * --
   *
   *
   * @param {Object} db - Instãncia do banco de dados
   * @param {String} collectionName - Nome da coleção
   * @constructor
   */
  constructor(db, collectionName) {
    super(db, collectionName);
  }

  /**
   * Lista todas as tarefas de um grupo específico
   * --
   *
   * @param {UUID} group_id - Identificaodr único de um grupo
   * @returns {Array} - Lista com todas as tarefas do grupo
   */

  //async load(group_id, cached = false) {
  //  const q = query(this.colRef(), where("group_id", "==", group_id));
  //  const snapshot = await getDocs(q);
  //  return snapshot.docs.map((d) => ({ id: d.id, ...d.data() }));
  //}

  async load(group_id, cached = false) {
    const snapshot = await super.load(cached);
    const filteredDocs = snapshot.filter((doc) => doc.group_id === group_id);
    return filteredDocs.map((d) => ({ id: d.id, ...d }));
  }
}
