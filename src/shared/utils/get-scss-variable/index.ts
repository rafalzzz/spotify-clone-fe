export const getScssVariable = (variable: string) => {
  if (typeof window === 'undefined') {
    return;
  }

  const rootStyle = getComputedStyle(document.body);
  return rootStyle.getPropertyValue(variable).trim();
};
