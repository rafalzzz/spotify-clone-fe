import { getDate } from '@/utils/get-date';
import { getPastDate } from '@/utils/get-past-date';

const MAX_ALLOWED_AGE = 100;

export const isValidDate = (year: number, month: number, day: number) => {
  const inputDate = getDate(year, month, day);
  if (isNaN(inputDate as unknown as number) || !inputDate) return;

  inputDate.setHours(0, 0, 0, 0);
  const maxAllowedDate = getPastDate(MAX_ALLOWED_AGE);
  const currentDate = getPastDate();

  const isYoungerThanAllowedDate = inputDate.getTime() > maxAllowedDate.getTime();
  const isBeforeCurrentDate = inputDate.getTime() < currentDate.getTime();

  return isYoungerThanAllowedDate && isBeforeCurrentDate;
};
