"use server";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import prisma from "../../lib/prisma";
import { Items } from "mercadopago/dist/clients/commonTypes";
import { createPayment } from "@/src/core/payment";

export async function createOrder() {
  const items = await getItems();
  const redirectUrl = await createPayment(items);
  redirect(redirectUrl);
}

async function getItems() {
  const cookieStore = await cookies();
  const cartUuid = await cookieStore.get("cartUuid");
  const items = await prisma.$queryRawUnsafe<Items[]>(
    `
    SELECT 
    p.name AS "title",
    ci.quantity,
    p.price AS "unit_price",
    pv.id AS "id"
    FROM "CartItem" ci
    JOIN "ProductVariant" pv ON pv.id = ci."productVariantId"
    JOIN "Product" p ON p.id = pv."productId"
    WHERE ci."cartId" = $1
    `,
    cartUuid?.value
  );
  return items;
}
