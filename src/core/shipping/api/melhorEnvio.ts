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

  return data.map((envio: any) => ({
    id: envio.id,
    price: Number(envio.custom_price),
    companyName: envio.company.name,
    deliveryMin: envio.custom_delivery_range.min,
    deliveryMax: envio.custom_delivery_range.max,
  }));
}
