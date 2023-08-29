import { getDate } from './get-date';

describe('getDate function', () => {
  it('returns correct date object', () => {
    const year = 2023;
    const month = 7;
    const day = 26;

    const date = getDate(year, month, day);

    expect(date?.getFullYear()).toBe(year);
    expect(date?.getMonth()).toBe(month - 1);
    expect(date?.getDate()).toBe(day);
  });

  it('returns undefined if provided date is incorrect', () => {
    const year = 2023;
    const month = 13;
    const day = 26;

    const date = getDate(year, month, day);

    expect(date).toBeUndefined();
  });
});
