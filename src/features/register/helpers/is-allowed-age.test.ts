import * as utils from '@/helpers/get-date';
import * as utilsPastDate from '@/helpers/get-past-date';

import { isAllowedAge } from './is-allowed-age';

jest.mock('@/helpers/get-date');
jest.mock('@/helpers/get-past-date');

describe('isAllowedAge', () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('should return undefined if getDate returns undefined', () => {
    jest.spyOn(utils, 'getDate').mockReturnValue(undefined);

    const result = isAllowedAge(2000, 12, 31);
    expect(result).toBeUndefined();
  });

  it('should return true if input date is less than min allowed date', () => {
    jest.spyOn(utils, 'getDate').mockReturnValue(new Date(1900, 0, 1));
    jest.spyOn(utilsPastDate, 'getPastDate').mockReturnValue(new Date());

    const result = isAllowedAge(1900, 1, 1);
    expect(result).toBe(true);
  });

  it('should return false if input date is greater than min allowed date', () => {
    jest.spyOn(utils, 'getDate').mockReturnValue(new Date());
    jest.spyOn(utilsPastDate, 'getPastDate').mockReturnValue(new Date(1900, 0, 1));

    const result = isAllowedAge(2023, 7, 29);
    expect(result).toBe(false);
  });
});
