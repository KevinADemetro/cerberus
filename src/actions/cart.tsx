"use server";
import { Prisma } from "@/generated/prisma";
import { cookies } from "next/headers";
import prisma from "../lib/prisma";

export async function handleAddToCart(variant: Prisma.ProductVariantGetPayload<object>) {
  const cookieStore = await cookies();
  const cartUuid = await cookieStore.get("cartUuid");
  let cart;
  if (cartUuid) {
    cart = await prisma.cart.findUniqueOrThrow({ where: { id: cartUuid.value } });
    await prisma.cart.update({
      where: { id: cartUuid.value },
      data: {
        updatedAt: new Date(),
      },
    });
  } else {
    cart = await prisma.cart.create({
      data: {
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    });
    cookieStore.set("cartUuid", cart.id);
  }

  await prisma.cartItem.create({
    data: {
      cartId: cart.id,
      productVariantId: variant.id,
      quantity: 1,
    },
  });
}
