export function getDiscountedPrice(price: number, discountRate: number): number {
  return price * (1 - discountRate / 100);
}
