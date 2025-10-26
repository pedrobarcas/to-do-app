import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../../firebase/firebase";
import { Observable } from "../../domain/Observable";

export class CreateTaskViewModel extends Observable {
  constructor(factory, repository) {
    super();
    this.factory = factory;
    this.repository = repository;
  }

  async create(obj, groupId) {
    const user = await new Promise((resolve) => {
      onAuthStateChanged(auth, (user) => {
        if (user) resolve(user);
      });
    });

    const object = this.factory.create(obj, user.uid, groupId);
    const resolution = await this.repository.save(object);
    this.notify(object);
    return resolution;
  }
}
