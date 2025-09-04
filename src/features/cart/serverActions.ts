"use server";
import { Prisma } from "@/generated/prisma";
import { cookies } from "next/headers";
import prisma from "../../lib/prisma";
import { redirect } from "next/navigation";

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

  if (variant) {
    const item = await prisma.cartItem.findUnique({
      where: {
        productVariantId_cartId: {
          productVariantId: variant.id,
          cartId: cart.id,
        },
      },
    });

    if (item) {
      await prisma.cartItem.update({
        data: {
          quantity: item.quantity + 1,
        },
        where: { id: item.id },
      });
    } else {
      await prisma.cartItem.create({
        data: {
          cartId: cart.id,
          productVariantId: variant.id,
          quantity: 1,
        },
      });
    }
  }
}

export async function handleChangeQuantity(formData: FormData) {
  const action = formData.get("action");
  const cartItemId = Number(formData.get("cartItemId"));
  const quantity = Number(formData.get("quantity"));

  if (!cartItemId || isNaN(cartItemId)) {
    throw new Error("erro no id");
  }

  if (isNaN(quantity)) {
    throw new Error("erro na quantidade");
  }

  if (quantity === 1 && action === "decrement") {
    await prisma.cartItem.delete({
      where: { id: cartItemId },
    });

    redirect("/carrinho");
  }

  if (action === "increment") {
    await prisma.cartItem.update({
      where: { id: cartItemId },
      data: {
        quantity: quantity + 1,
      },
    });
  } else if (action === "decrement") {
    await prisma.cartItem.update({
      where: { id: cartItemId },
      data: {
        quantity: quantity - 1,
      },
    });
  }

  redirect("/carrinho");
}

export async function removeItem(cartItemId: number) {
  const cookieStore = await cookies();
  const cartUuid = await cookieStore.get("cartUuid");

  if (cartUuid) {
    await prisma.cartItem.delete({ where: { id: cartItemId, cartId: cartUuid.value } });
  }
  redirect("/carrinho");
}

export async function getCartItems() {
  const cookieStore = await cookies();
  const cartUuid = await cookieStore.get("cartUuid");
  const res = await prisma.cartItem.findMany({
    include: { productVariant: { include: { product: true } } },
    where: { cartId: cartUuid?.value ?? "__invalid_id__" },
    orderBy: { id: "desc" },
  });
  return res;
}
