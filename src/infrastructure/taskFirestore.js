import { Firestore } from "./Firestore";
import { where, getDocs, query } from "firebase/firestore";

export class TaskFirestore extends Firestore {
  constructor(db, collectionName) {
    super(db, collectionName);
  }

  async load(group_id) {
    const q = query(this.colRef(), where("group_id", "==", group_id));
    const snapshot = await getDocs(q);
    return snapshot.docs.map((d) => ({ id: d.id, ...d.data() }));
  }
}
