export const getScssVariable = (variable: string) => {
  const rootStyle = getComputedStyle(document.body);
  return rootStyle.getPropertyValue(variable).trim();
};
