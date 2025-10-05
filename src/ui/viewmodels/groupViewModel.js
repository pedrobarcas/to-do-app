import { Observable } from "../../domain/Observable";

export class GroupViewModel extends Observable {
  constructor(repository, groupRepository, service) {
    super(); // ⚠️ importante chamar antes de acessar this
    this.repository = repository;
    this.groupRepository = groupRepository;
    this.service = service;
  }

  find(key) {
    return this.repository.find(key);
  }

  remove(key) {
    this.unsubscribeAll();
    const group = this.repository.find(key);
    this.repository.remove(group);
    this.groupRepository.clear(key);

    // Notifica os inscritos que um grupo foi removido
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

      this.repository.remove(group);
      this.groupRepository.clear(group.id);

      updatedGroup = this.service.edit(group, updates);

      this.repository.save(updatedGroup);
      this.groupRepository.save(updatedGroup);
    } else {
      updatedGroup = this.service.edit(group, updates);
      this.groupRepository.edit(updatedGroup);
      this.repository.edit(updatedGroup);
    }

    // Notifica os inscritos que o grupo foi atualizado
    this.notify(updatedGroup);

    return updatedGroup;
  }
}
