import { InvalidFieldError } from "../../error/invalidFieldError";
import { FieldValidation } from "../../protocols/fieldValidation";

export class EmailValidator implements FieldValidation{

    constructor(readonly field: string) {}
    Error: any
    
    validate(value: string): null | Error {
        const emailRegEx = /^[-!#$%&'*+/0-9=?A-Z^_a-z{|}~](\.?[-!#$%&'*+/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/
        return !value || emailRegEx.test(value) ? null : new InvalidFieldError(); 
    }
    
}