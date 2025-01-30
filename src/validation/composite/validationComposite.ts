import { FieldValidation } from "../protocols/fieldValidation";
import { Validation } from "../protocols/validation";

export class ValidationComposite implements Validation{
    
    private constructor(private readonly validators : FieldValidation[]){}
    
    static build(validators : FieldValidation[]) : ValidationComposite{
        return new ValidationComposite(validators);
    };

    validate(fieldName: string, fieldValue: string): string {
        const fieldValidators = this.validators.filter(
            (validator) => validator.field === fieldName
        );

        for (const validator of fieldValidators) {
            const error = validator.validate(fieldValue)
      
            if (error) return error.message;
        }

        return '';

    }

}