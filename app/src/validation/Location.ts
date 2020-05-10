import { ValidatorConstraint, ValidatorConstraintInterface, ValidationArguments } from 'class-validator';

@ValidatorConstraint({ name: 'Location', async: false })
export class Location implements ValidatorConstraintInterface {
  private TimeZoneRegex = /^(-?\d+(\.\d+)?),\s*(-?\d+(\.\d+)?)$/;

  validate(text: string, args: ValidationArguments) {
    return !!this.TimeZoneRegex.exec(text);
  }

  defaultMessage(args: ValidationArguments) {
    return 'Text ($value) is not valid timezone!';
  }
}
