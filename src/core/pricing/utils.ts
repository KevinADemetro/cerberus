import { Prisma } from "@/generated/prisma";
import { PricingTotals } from "./pricingTotals.type";

export function getProductsSubtotal(
  cartItems: Prisma.CartItemGetPayload<{
    include: { productVariant: { include: { product: true } } };
  }>[]
): number {
  return cartItems.reduce((acc, item) => {
    return acc + getPrice(item.productVariant.product) * item.quantity;
  }, 0);
}

export function calculateDiscount(
  subtotal: number,
  coupon?: { type: "percent" | "fixed"; value: number }
): number {
  if (!coupon) return 0;

  if (coupon.type === "percent") {
    return (subtotal * coupon.value) / 100;
  }

  if (coupon.type === "fixed") {
    return coupon.value;
  }

  return 0;
}

export function calculatePreviewTotal(
  items: Prisma.CartItemGetPayload<{
    include: { productVariant: { include: { product: true } } };
  }>[],
  shipping: number,
  coupon?: { type: "percent" | "fixed"; value: number }
): PricingTotals {
  const subtotal = getProductsSubtotal(items);
  const discount = calculateDiscount(subtotal, coupon);
  const total = subtotal - discount + shipping;

  return { subtotal, discount, shipping, total };
}

export function getPrice(product: { price: number; discountRate?: number }): number {
  if (product.discountRate && product.discountRate > 0) {
    return getDiscountedPrice(product.price, product.discountRate);
  }
  return product.price;
}

export function getDiscountedPrice(price: number, discountRate: number): number {
  return price * (1 - discountRate / 100);
}
