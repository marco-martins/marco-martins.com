import { DatePipe, NgTemplateOutlet } from '@angular/common';
import { Component, computed, input } from '@angular/core';
import { DateRangePipe } from '../../../pipes/date-range.pipe';
import { Position } from '../../models/position';

// recent positons are the first 4
const cutPosition = 4;

@Component({
  imports: [DatePipe, DateRangePipe, NgTemplateOutlet],
  selector: 'career',
  templateUrl: './career.component.html',
})
export default class CareerComponent {
  readonly items = input<Position[]>([]);
  readonly recentPositions = computed(() => this.items().slice(0, cutPosition));
  readonly earlierPositions = computed(() => this.items().slice(cutPosition));
}
