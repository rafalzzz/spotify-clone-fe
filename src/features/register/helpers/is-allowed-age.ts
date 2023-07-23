import { getDate } from '@/utils/get-date';
import { getPastDate } from '@/utils/get-past-date';

const MIN_ALLOWED_AGE = 12;

export const isAllowedAge = (year: number, month: number, day: number) => {
  const inputDate = getDate(year, month, day);
  const minAllowedDate = getPastDate(MIN_ALLOWED_AGE);

  if (!inputDate) return;

  inputDate.setHours(0, 0, 0, 0);
  return inputDate.getTime() < minAllowedDate.getTime();
};
