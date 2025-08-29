export class TaskIDNotSend extends Error {
    constructor() {
        super('O id da Task não foi enviado.');
        this.name = this.constructor.name;
        this.statusCode = 400;
        Error.captureStackTrace(this, this.constructor);
    }
}