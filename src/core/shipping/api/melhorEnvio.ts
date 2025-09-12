"use server";

import { melhorEnvioClient, cepFrom } from "@/src/lib/melhorEnvio";

export async function calculateShipping(cepTo: string) {
  const body = {
    from: {
      postal_code: cepFrom,
    },
    to: {
      postal_code: cepTo,
    },
  };

  const { data } = await melhorEnvioClient.post("/me/shipment/calculate", body);

  //todo erro na api

  const cheapest = data.reduce((prev: any, curr: any) =>
    Number(curr.custom_price) < Number(prev.custom_price) ? curr : prev
  );

  return {
    id: cheapest.id,
    price: Number(cheapest.custom_price),
    companyName: cheapest.company.name,
    deliveryTime: cheapest.delivery_time,
  };
}
