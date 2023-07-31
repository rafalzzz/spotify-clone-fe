import * as utils from '@/utils/get-date';
import * as utilsPastDate from '@/utils/get-past-date';

import { isValidDate } from './is-valid-date';

jest.mock('@/utils/get-date');
jest.mock('@/utils/get-past-date');

describe('isValidDate', () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('should return undefined if getDate returns undefined', () => {
    jest.spyOn(utils, 'getDate').mockReturnValue(undefined);

    const result = isValidDate(2000, 12, 31);
    expect(result).toBeUndefined();
  });

  it('should return false if input date is older than max allowed date', () => {
    jest.spyOn(utils, 'getDate').mockReturnValue(new Date(1800, 0, 1));
    jest
      .spyOn(utilsPastDate, 'getPastDate')
      .mockReturnValueOnce(new Date(1900, 0, 1))
      .mockReturnValueOnce(new Date());

    const result = isValidDate(1800, 1, 1);
    expect(result).toBe(false);
  });

  it('should return false if input date is in the future', () => {
    jest.spyOn(utils, 'getDate').mockReturnValue(new Date(2050, 0, 1));
    jest
      .spyOn(utilsPastDate, 'getPastDate')
      .mockReturnValueOnce(new Date())
      .mockReturnValueOnce(new Date());

    const result = isValidDate(2050, 1, 1);
    expect(result).toBe(false);
  });
});
