import { MinLengthError } from "../../error/minLengthError";
import { FieldValidation } from "../../protocols/fieldValidation";

export class MinLengthValidator implements FieldValidation {
  constructor(readonly field: string, private readonly minLength: number) {}
  Error: any
  
  validate(value: string): Error | null{
    return value.length >= this.minLength 
      ? null
      : new MinLengthError(this.minLength)
  }
}
