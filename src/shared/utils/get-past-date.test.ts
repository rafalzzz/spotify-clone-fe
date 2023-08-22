import { getPastDate } from './get-past-date'; // Replace with your actual file

describe('getPastDate function', () => {
  it('returns date object with subtracted years', () => {
    const yearsToSubtract = 5;
    const expectedDate = new Date();
    expectedDate.setFullYear(expectedDate.getFullYear() - yearsToSubtract);
    expectedDate.setHours(0, 0, 0, 0);

    const resultDate = getPastDate(yearsToSubtract);

    expect(resultDate.getFullYear()).toBe(expectedDate.getFullYear());
    expect(resultDate.getMonth()).toBe(expectedDate.getMonth());
    expect(resultDate.getDate()).toBe(expectedDate.getDate());
    expect(resultDate.getHours()).toBe(0);
    expect(resultDate.getMinutes()).toBe(0);
    expect(resultDate.getSeconds()).toBe(0);
    expect(resultDate.getMilliseconds()).toBe(0);
  });

  it('returns current date if no years to subtract', () => {
    const expectedDate = new Date();
    expectedDate.setHours(0, 0, 0, 0);

    const resultDate = getPastDate();

    expect(resultDate.getFullYear()).toBe(expectedDate.getFullYear());
    expect(resultDate.getMonth()).toBe(expectedDate.getMonth());
    expect(resultDate.getDate()).toBe(expectedDate.getDate());
    expect(resultDate.getHours()).toBe(0);
    expect(resultDate.getMinutes()).toBe(0);
    expect(resultDate.getSeconds()).toBe(0);
    expect(resultDate.getMilliseconds()).toBe(0);
  });
});
