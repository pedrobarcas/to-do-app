import { Observable } from "../../domain/Observable";

export class GroupViewModel extends Observable {
  constructor(repository, groupRepository, service) {
    super();
    this.repository = repository;
    this.groupRepository = groupRepository;
    this.service = service;
  }

  async find(key) {
    const resolution = await this.repository.find(key);
    return resolution;
  }

  async remove(key) {
    this.unsubscribeAll();
    const group = await this.repository.find(key);
    await this.repository.remove(group);
    await this.groupRepository.remove(key);

    this.notify({ removed: key });
  }

  async edit(group, updates = {}) {
    const updatedGroup = this.service.edit(group, updates);
    console.log(updatedGroup);
    const obj = await this.repository.edit(updatedGroup);
    console.log(obj);
    this.notify(updatedGroup);
    return obj;
  }
}
