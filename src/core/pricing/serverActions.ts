"use server";
import { PricingTotals } from "@/src/core/pricing/pricingTotals.type";
import prisma from "@/src/lib/prisma";
import { cookies } from "next/headers";
import { calculateDiscount, getProductsSubtotal } from "./utils";

export async function calculateTotal(cartId?: string): Promise<PricingTotals> {
  if (!cartId) {
    const cookieStore = await cookies();
    cartId = cookieStore.get("cartUuid")?.value;
    if (!cartId) throw new Error("Carrinho não encontrado");
  }

  const cart = await prisma.cart.findUnique({
    where: { id: cartId },
    include: {
      cartItems: { include: { productVariant: { include: { product: true } } } },
    },
  });

  if (!cart) throw new Error("Carrinho não encontrado");

  const shipping = (cart?.shippingQuote as { price?: number })?.price ?? 0;
  const subtotal = getProductsSubtotal(cart.cartItems);
  const discount = calculateDiscount(subtotal, { type: "fixed", value: 3 });
  const total = subtotal - discount + shipping;

  return { subtotal, discount, shipping, total };
}
