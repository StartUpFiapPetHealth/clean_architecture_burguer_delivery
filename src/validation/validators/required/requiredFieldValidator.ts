import { RequiredFieldError } from "../../error/requiredFieldError";
import { FieldValidation } from "../../protocols/fieldValidation";

export class RequiredFieldValidator implements FieldValidation {
  constructor(readonly field: string) {}
  Error: any;

  validate(value: string): null | Error {
    return value ? null : new RequiredFieldError();
  }
}
