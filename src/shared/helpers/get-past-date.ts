export const getPastDate = (yearsToSubtract: number | undefined = 0): Date => {
  const maxAllowedDate = new Date();
  maxAllowedDate.setFullYear(maxAllowedDate.getFullYear() - yearsToSubtract);

  maxAllowedDate.setHours(0, 0, 0, 0);

  return maxAllowedDate;
};
