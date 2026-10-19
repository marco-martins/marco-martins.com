import { formatDate } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateRange',
})
export class DateRangePipe implements PipeTransform {
  transform(startDate: string, endDate?: string): string {
    const sameYear = endDate && startDate.slice(0, 4) === endDate.slice(0, 4);
    const start = formatDate(
      `${startDate}T00:00:00Z`,
      sameYear ? 'MMM' : 'MMM yyyy',
      'en-US',
      'UTC',
    );
    const end = endDate
      ? formatDate(`${endDate}T00:00:00Z`, 'MMM yyyy', 'en-US', 'UTC')
      : 'Present';

    return `${start} — ${end}`.toUpperCase();
  }
}
