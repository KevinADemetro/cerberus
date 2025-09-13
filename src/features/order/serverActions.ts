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
  const items = await prisma.$queryRawUnsafe<Items[]>(
    `
SELECT 
    pv.id AS "id",
    p.name AS "title",
    ci.quantity,
    p.price AS "unit_price"
FROM "CartItem" ci
INNER JOIN "ProductVariant" pv 
    ON pv.id = ci."productVariantId"
INNER JOIN "Product" p 
    ON p.id = pv."productId"
WHERE ci."cartId" = $1;

    `,
    cartUuid?.value
  );
  return items;
}
