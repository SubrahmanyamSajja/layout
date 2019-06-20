import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';

@Pipe({
  name: 'acodate'
})
export class AcoDatePipe extends DatePipe implements PipeTransform {
  datePart1: any;
  isActive: boolean;
  transform(value: any, args?: any): any {
    try {
      if (value == null) {
        return null
      }
      
      if (value != null && ('' + value).indexOf('/') > 0 && ('' + value).indexOf('-') > 0) {

        let tempValue = value.split('-');
        let datePart = tempValue[0].split('/');
        if (tempValue[1] == " ACTIVE") {
          this.datePart1 = tempValue[1];
          this.isActive = true;

        } else {
          this.datePart1 = tempValue[1].split('/');

        }

        if (Number(datePart[0]) == 1) {
          return '';
        }
        if (this.isActive) {
          return super.transform(new Date(datePart[0], datePart[1], datePart[2]), 'MM-dd-yyyy') +
            " - " + 'Active';

        } else {
          return super.transform(new Date(datePart[0], datePart[1], datePart[2]), 'MM-dd-yyyy') +
            " - " + super.transform(new Date(this.datePart1[0], this.datePart1[1], this.datePart1[2]), 'MM-dd-yyyy');
        }
      } else {
        var date = new Date(value);
        if (date.getFullYear() == 1) {
          return '';
        }
        if (args) {
          switch (args) {
            case 'withTime':
              return super.transform(new Date(value), 'MM-dd-yyyy h:mm:ss a');

            default:
              return super.transform(new Date(value), args);
          }
        }
        return super.transform(new Date(value), 'MM-dd-yyyy');
      }
    } catch {
      return '';
    }

  }
}
