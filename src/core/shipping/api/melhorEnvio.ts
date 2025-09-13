"use server";

import {
  melhorEnvioClient,
  cepFrom,
  from,
  to,
  products,
  options,
} from "@/src/lib/melhorEnvio";

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
  const cheapestPackage = data
    .filter((item: any) => item.name === ".Package")
    .reduce((prev: any, curr: any) =>
      Number(curr.custom_price) < Number(prev.custom_price) ? curr : prev
    );

  return {
    serviceId: cheapestPackage.id,
    price: Number(cheapestPackage.custom_price),
    companyId: cheapestPackage.company.id,
    companyName: cheapestPackage.company.name,
    deliveryTime: cheapestPackage.delivery_time,
  };
}

export async function createCart() {
  const body = {
    service: 4,
    agency: 2,
    from: from,
    to: to,
    products: products,
    options: options,
  };

  const { data } = await melhorEnvioClient.post("/me/cart", body);
  console.log(data);
}
