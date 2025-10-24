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
    await this.groupRepository.clear(key);

    this.notify({ removed: key });
  }

  edit(group, updates = {}) {
    const idChanged = updates.id && updates.id !== group.id;
    const nameChanged = updates.name && updates.name !== group.name;

    let updatedGroup;

    if (idChanged || nameChanged) {
      const oldKey = group.name;
      const newKey = updates.name || group.name;

      const tasks = JSON.parse(localStorage.getItem(oldKey)) || [];

      if (oldKey !== newKey) {
        localStorage.setItem(newKey, JSON.stringify(tasks));
        localStorage.removeItem(oldKey);
      }

      console.log("aaaa");
      this.repository.remove(group);
      this.groupRepository.remove(group);

      updatedGroup = this.service.edit(group, updates);

      this.repository.save(updatedGroup);
      this.groupRepository.save(updatedGroup);
    } else {
      updatedGroup = this.service.edit(group, updates);
      this.groupRepository.edit(updatedGroup);
      this.repository.edit(updatedGroup);
    }

    return updatedGroup;
  }
}
