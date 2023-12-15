import { TIsCreatedDateCorrect } from '@/types/helpers';

const isCreatedDateCorrect = ({ year, month, day, createdDate }: TIsCreatedDateCorrect): boolean =>
  createdDate.getFullYear() === year &&
  createdDate.getMonth() === month - 1 &&
  createdDate.getDate() === day;

export const getDate = (year: number, month: number, day: number) => {
  const date = new Date(`${year}-${month}-${day}`);

  if (isCreatedDateCorrect({ year, month, day, createdDate: date })) return date;
};
