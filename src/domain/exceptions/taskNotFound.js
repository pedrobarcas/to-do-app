export class TaskNotFound extends Error {
    constructor() {
        super('A task não foi encontrada no armazenamento.');
        this.name = this.constructor.name;
        this.statusCode = 404;
        Error.captureStackTrace(this, this.constructor);
    }
}