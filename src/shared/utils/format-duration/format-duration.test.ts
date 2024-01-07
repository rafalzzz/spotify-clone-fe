import { formatDuration } from '.';

describe('formatDuration', () => {
  it('formats zero seconds correctly', () => {
    expect(formatDuration(0)).toBe('0:00');
  });

  it('formats only seconds correctly', () => {
    expect(formatDuration(45)).toBe('0:45');
  });

  it('formats only minutes correctly', () => {
    expect(formatDuration(300)).toBe('5:00'); // 5 minutes
  });

  it('formats hours, minutes, and seconds correctly', () => {
    expect(formatDuration(3665)).toBe('1:01:05'); // 1 hour, 1 minute, 5 seconds
  });

  it('handles edge cases correctly', () => {
    expect(formatDuration(59)).toBe('0:59'); // just under 1 minute
    expect(formatDuration(3599)).toBe('59:59'); // just under 1 hour
  });

  it('handles large input values correctly', () => {
    expect(formatDuration(10000)).toBe('2:46:40'); // 2 hours, 46 minutes, 40 seconds
  });

  it('handles negative inputs', () => {
    expect(formatDuration(-60)).toBe('0:00'); // Negative test case, behavior is not defined in the function
  });
});
