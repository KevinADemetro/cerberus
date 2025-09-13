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
  console.log(data);
  const cheapestPackage = data
    .filter((item: any) => item.name === ".Package")
    .reduce((prev: any, curr: any) =>
      Number(curr.custom_price) < Number(prev.custom_price) ? curr : prev
    );

  return {
    id: cheapestPackage.id,
    price: Number(cheapestPackage.custom_price),
    companyName: cheapestPackage.company.name,
    deliveryTime: cheapestPackage.delivery_time,
  };
}
