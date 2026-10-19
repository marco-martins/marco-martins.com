import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'leadingZero',
})
export class LeadingZeroPipe implements PipeTransform {
  transform(value: number): string {
    return String(value).padStart(2, '0');
  }
}
