"use server";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import prisma from "../../lib/prisma";
import { Items } from "mercadopago/dist/clients/commonTypes";
import { createPayment } from "@/src/core/payment/api/mercadoPago";

export async function createOrder() {
  const items = await getItems();
  const redirectUrl = await createPayment(items);
  redirect(redirectUrl);
}

async function getItems() {
  const cookieStore = await cookies();
  const cartUuid = await cookieStore.get("cartUuid");

  if (!cartUuid?.value) throw new Error("Carrinho não encontrado");

  const items = await prisma.$queryRawUnsafe<Items[]>(
    `
    SELECT 
        pv.id AS "id",
        p.name AS "title",
        ci.quantity,
        p.price AS "unit_price"
    FROM "cart_item" ci
    INNER JOIN "product_variant" pv 
        ON pv.id = ci."product_variant_id"
    INNER JOIN "product" p 
        ON p.id = pv."product_id"
    WHERE ci."cart_id" = $1;
    `,
    cartUuid.value
  );

  const cart = await prisma.cart.findUnique({
    where: { id: cartUuid.value },
    select: { shippingQuote: true },
  });

  if (cart?.shippingQuote === undefined) {
    throw new Error("Carrinho sem frete");
  }

  const shippingQuote = cart.shippingQuote as {
    price: number;
    serviceId: number;
    companyName: string;
  };
  items.push({
    id: `shipping-${shippingQuote.serviceId}`,
    title: `Frete (${shippingQuote.companyName})`,
    quantity: 1,
    unit_price: shippingQuote.price,
  });

  return items;
}
