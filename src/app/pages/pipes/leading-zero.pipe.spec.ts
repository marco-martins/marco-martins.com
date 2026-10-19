import { LeadingZeroPipe } from './leading-zero.pipe';

describe('LeadingZeroPipe', () => {
  const pipe = new LeadingZeroPipe();

  it('adds a leading zero to single-digit numbers', () => {
    expect(pipe.transform(1)).toBe('01');
    expect(pipe.transform(9)).toBe('09');
  });

  it('formats zero with two digits', () => {
    expect(pipe.transform(0)).toBe('00');
  });

  it('preserves numbers with two or more digits', () => {
    expect(pipe.transform(10)).toBe('10');
    expect(pipe.transform(100)).toBe('100');
  });
});
