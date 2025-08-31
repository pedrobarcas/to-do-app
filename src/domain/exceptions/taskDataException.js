export class TaskDataException extends Error {
    constructor() {
        super('Pelo menos o nome ou a descrição precisam ser preenchidos.');
        this.name = this.constructor.name;
        Error.captureStackTrace(this, this.constructor);
    }
}