"use server";
import mercadoPagoClient from "@/src/lib/mercadoPago";
import { Items } from "mercadopago/dist/clients/commonTypes";
import { PaymentMethod, Preference } from "mercadopago";
import fs from "fs";
import path from "path";

export async function createPayment(items: Items[]) {
  const preference = new Preference(mercadoPagoClient);

  const response = await preference.create({
    body: {
      items: items,
      back_urls: {
        success: "http://localhost:3000/",
        failure: "http://localhost:3000/checkout/pagamento",
        pending: "http://localhost:3000/checkout",
      },
    },
  });
  return response.init_point ?? "";
}

export async function getPaymentMethods() {
  const paymentMethods = new PaymentMethod(mercadoPagoClient);
  const res = await paymentMethods.get();

  return res.map((m: any) => ({
    id: m.id,
    name: m.name,
    image: getImagePath(m.id, m.secure_thumbnail),
  }));
}

function getImagePath(imageName: string, altSrc: string) {
  console.log(imageName);
  const filePath = path.join(process.cwd(), "public/images/", `${imageName}.svg`);
  if (fs.existsSync(filePath)) {
    return `/images/${imageName}.svg`;
  }
  return altSrc;
}
