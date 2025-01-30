import { FieldValidation } from "../protocols/fieldValidation";
import {  EmailValidator } from "../validators/email/emailValidator";
import { MinLengthValidator} from "../validators/minLength/minLengthValidator";
import {RequiredFieldValidator} from "../validators/required/requiredFieldValidator";

export class ValidationBuilder {
  private constructor(
    private readonly fieldName: string,
    private readonly validations: FieldValidation[]
  ) {}

  static field(fieldName: string): ValidationBuilder {
    return new ValidationBuilder(fieldName, []);
  }

  email(): ValidationBuilder {
    this.validations.push(new EmailValidator(this.fieldName));

    return this;
  }

  min(length: number): ValidationBuilder {
    this.validations.push(new MinLengthValidator(this.fieldName, length));

    return this;
  }

  required(): ValidationBuilder {
    this.validations.push(new RequiredFieldValidator(this.fieldName));

    return this;
  }

  build(): FieldValidation[] {
    return this.validations;
  }
}
