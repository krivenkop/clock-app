import { ValidatorConstraint, ValidatorConstraintInterface, ValidationArguments } from 'class-validator';

@ValidatorConstraint({ name: 'TimeZone', async: false })
export class Timezone implements ValidatorConstraintInterface {
  private TimeZoneRegex = /^(?:Z|[+-](?:2[0-3]|[01][0-9]):[0-5][0-9])$/;

  validate(text: string, args: ValidationArguments) {
    return !!this.TimeZoneRegex.exec(text);
  }

  defaultMessage(args: ValidationArguments) {
    return 'Text ($value) is not valid timezone!';
  }
}
