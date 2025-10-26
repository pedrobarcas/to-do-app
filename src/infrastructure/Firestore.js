import {
  collection,
  addDoc,
  doc,
  setDoc,
  getDoc,
  getDocs,
  updateDoc,
  deleteDoc,
  query,
  where,
} from "firebase/firestore";

export class Firestore {
  constructor(db, collectionName) {
    this.db = db;
    this.collectionName = collectionName;
    this.userCached = JSON.parse(localStorage.getItem("userCached"));
  }

  colRef() {
    return collection(this.db, this.collectionName);
  }

  docRef(id) {
    return doc(this.db, this.collectionName, String(id));
  }

  async load() {
    const q = query(this.colRef(), where("user_id", "==", this.userCached.uid));
    const snapshot = await getDocs(q);
    // sempre retornar array de objetos normalizados
    return snapshot.docs.map((d) => ({ id: d.id, ...d.data() }));
  }

  async loadTasks(group_id) {
    const q = query(this.colRef(), where("group_id", "==", group_id));
    const snapshot = await getDocs(q);
    return snapshot.docs.map((d) => ({ id: d.id, ...d.data() }));
  }

  // Se obj.id existir: setDoc(com id). Se não: addDoc()
  async save(obj) {
    try {
      const payload = obj;
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
    const payload = obj;
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

  async find(id) {
    const ref = this.docRef(id);
    const snap = await getDoc(ref);
    return snap.exists() ? { id: snap.id, ...snap.data() } : null;
  }
}
