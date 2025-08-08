export function formatCurrency(
  value: number,
  locale = "pt-BR",
  currency = "BRL"
): string {
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency,
  }).format(value);
}

export function formatOneDecimal(value: number): string {
  return value.toFixed(1);
}
