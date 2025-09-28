export class GroupViewModel {
  constructor(repository, groupRepository, service) {
    this.repository = repository;
    this.groupRepository = groupRepository;
    this.service = service;
  }

  find(key) {
    return this.repository.find(key);
  }

  remove(key) {
    const group = this.repository.find(key);
    this.repository.remove(group);
    this.groupRepository.clear(key);
  }

  edit(group, updates = {}) {
    const idChanged = updates.id && updates.id !== group.id;
    const nameChanged = updates.name && updates.name !== group.name;

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

      const updatedGroup = this.service.edit(group, updates);

      this.repository.save(updatedGroup);
      this.groupRepository.save(updatedGroup);

      return updatedGroup;
    }

    const updatedGroup = this.service.edit(group, updates);
    this.groupRepository.edit(updatedGroup);
    this.repository.edit(updatedGroup);

    return updatedGroup;
  }
}
