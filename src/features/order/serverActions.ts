"use server";
import { Preference } from "mercadopago";
import mercadoPagoClient from "../../lib/mercadoPago";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import prisma from "../../lib/prisma";
import { Items } from "mercadopago/dist/clients/commonTypes";

export async function createOrder() {
  const preference = new Preference(mercadoPagoClient);

  const response = await preference.create({
    body: {
      items: await getItems(),
      back_urls: {
        success: "http://localhost:3000/",
        failure: "http://localhost:3000/checkout/pagamento",
        pending: "http://localhost:3000/checkout",
      },
    },
  });
  console.log(response);
  redirect(response.init_point ?? "");
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
