import { Validator } from "./validator";
import { MaximumCharactersExceeded } from "../exceptions";

export class DescriptionExceededValidator extends Validator {
    validate(task) {
        if (task.description && task.description.length > 150) {
            throw new MaximumCharactersExceeded(
                'O campo "descrição" deve ter no máximo 150 caracteres.'
            );
        }
    }
}