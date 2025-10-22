import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../../firebase/firebase";
import { Observable } from "../../domain/Observable";

export class CreateTaskViewModel extends Observable {
  constructor(factory, repository) {
    super();
    this.factory = factory;
    this.repository = repository;
  }

  create(obj) {
    onAuthStateChanged(auth, (user) => {
      const object = this.factory.create(obj, user.uid);
      this.repository.save(object);
      this.notify(object);
    });
  }
}
