
export const currencyFormatter = (
  value: number,
  locale: string = 'en-US',
  currency: string = 'USD'
): string => {
  return value.toLocaleString(locale, {
    style: 'currency',
    currency,
    minimumFractionDigits: 2,
  });
};