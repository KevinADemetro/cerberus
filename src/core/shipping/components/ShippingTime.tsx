"use client";
import { useState } from "react";
import { calculateShipping } from "../api/melhorEnvio";
import { CepField } from "@/src/features/address/components/CepField";
import { DeliveryOption } from "../shipping.types";
import { formatCurrency } from "@/src/utils/formatter";

export function ShippingTime() {
  const [deliveryOptions, setDeliveryOptions] = useState<DeliveryOption[] | null>(null);

  const action = async (cep: string) => {
    setDeliveryOptions(await calculateShipping(cep));
  };

  return (
    <div className="mt-10">
      <h2 className="mb-5">Prazo de entrega</h2>
      <CepField customAction={action} />
      <ul>
        {deliveryOptions?.map((deliveryOption) => (
          <li key={deliveryOption.id} className="flex gap-2">
            <p>{deliveryOption.companyName}</p>
            <p>{formatCurrency(deliveryOption.price)}</p>
            <p>Entre: {deliveryOption.deliveryMin}</p>
            <p>à {deliveryOption.deliveryMax} dias</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
