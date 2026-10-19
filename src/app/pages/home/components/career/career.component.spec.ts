import { ComponentFixture, TestBed } from '@angular/core/testing';
import CareerComponent from './career.component';
import { Position } from '../../models/position';

describe('CareerComponent', () => {
  let component: CareerComponent;
  let fixture: ComponentFixture<CareerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CareerComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CareerComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('keeps the first four positions visible and the rest in a closed disclosure', async () => {
    const positions: Position[] = Array.from({ length: 6 }, (_, index) => ({
      id: `position-${index}`,
      organization: `Organization ${index}`,
      role: 'Developer',
      context: [],
      startDate: '2020-01-01',
      endDate: '2021-12-31',
      description: 'Software development',
      tags: [],
    }));
    fixture.componentRef.setInput('items', positions);
    await fixture.whenStable();

    const element: HTMLElement = fixture.nativeElement;
    const details = element.querySelector('details');

    expect(element.querySelectorAll('.wrap > .timeline .timeline-row')).toHaveLength(4);
    expect(details?.open).toBe(false);
    expect(details?.querySelectorAll('.timeline-row')).toHaveLength(2);
    expect(element.querySelector('.wrap > .timeline h3')?.textContent).toBe('Organization 0');
    expect(details?.querySelector('h3')?.textContent).toBe('Organization 4');

    fixture.componentRef.setInput('items', positions.slice(0, 4));
    await fixture.whenStable();

    expect(element.querySelectorAll('.timeline-row')).toHaveLength(4);
    expect(element.querySelector('details')).toBeNull();
  });
});
