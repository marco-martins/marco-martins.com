import { DateRangePipe } from './date-range.pipe';

describe('DateRangePipe', () => {
  const pipe = new DateRangePipe();

  it('includes both years when the dates span different years', () => {
    expect(pipe.transform('2024-09-01', '2026-05-31')).toBe('SEP 2024 — MAY 2026');
  });

  it('shows the year once when both dates are in the same year', () => {
    expect(pipe.transform('2012-06-01', '2012-12-31')).toBe('JUN — DEC 2012');
  });

  it('uses PRESENT when there is no end date', () => {
    expect(pipe.transform('2024-09-01')).toBe('SEP 2024 — PRESENT');
  });
});
