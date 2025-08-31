import { Validator } from "./validator";
import { MaximumCharactersExceeded } from "../exceptions";

export class NameExceededValidator extends Validator {
    validate(task) {
        if (task.name && task.name.length > 30) {
            throw new MaximumCharactersExceeded(
                'O campo "nome" deve ter no máximo 30 caracteres.'
            );
        }
    }
}