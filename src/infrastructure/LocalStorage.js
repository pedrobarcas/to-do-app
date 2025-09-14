export class LocalStorageRepository {
  constructor(key) {
    this.key = key;
  }

  _loadAll() {
    return JSON.parse(localStorage.getItem(this.key)) || [];
  }

  _saveAll(data) {
    localStorage.setItem(this.key, JSON.stringify(data));
  }

  save(object) {
    const data = this._loadAll();
    data.push(object);
    this._saveAll(data);
    return object;
  }

  load() {
    return this._loadAll();
  }

  find(id) {
    return this._loadAll().find((obj) => obj.id === id);
  }

  edit(object) {
    const data = this._loadAll();
    const index = data.findIndex((obj) => obj.id === object.id);
    if (index !== -1) {
      data[index] = object;
      this._saveAll(data);
    }
    return object;
  }

  remove(object) {
    const data = this._loadAll().filter((obj) => obj.id !== object.id);
    this._saveAll(data);
  }
}
