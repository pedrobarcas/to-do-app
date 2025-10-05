export class Observable {
  constructor() {
    this.subscribers = [];
  }

  subscribe(fn) {
    this.subscribers.push(fn);
  }

  unsubscribe(fn) {
    this.subscribers = this.subscribers.filter((sub) => sub !== fn);
  }

  unsubscribeAll() {
    this.subscribers = [];
  }

  notify(data) {
    this.subscribers.forEach((fn) => fn(data));
  }
}
