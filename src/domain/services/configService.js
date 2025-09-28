export class ConfigService {
  constructor(env) {
    this.env = env;
  }

  get(key) {
    return this.env[key];
  }
}
