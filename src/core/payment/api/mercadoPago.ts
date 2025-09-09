"use server";
import mercadoPagoClient from "@/src/lib/mercadoPago";
import { Items } from "mercadopago/dist/clients/commonTypes";
import { PaymentMethod, Preference } from "mercadopago";

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
    image: m.secure_thumbnail,
  }));
}
