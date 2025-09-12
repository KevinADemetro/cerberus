"use client";
import { useState } from "react";
import { calculateShipping } from "../api/melhorEnvio";
import { CepField } from "@/src/features/address/components/CepField";
import { DeliveryOption } from "../shipping.types";
import { DeliveryOptions } from "./DeliveryOptions";

export function ShippingTime({
  onShippingCalculate,
}: {
  onShippingCalculate?: (price: number) => void;
}) {
  const [deliveryOptions, setDeliveryOptions] = useState<DeliveryOption[]>([]);

  const action = async (cep: string) => {
    const option = await calculateShipping(cep);
    setDeliveryOptions([option]);
    if (onShippingCalculate) {
      onShippingCalculate(option.price);
    }
  };

  return (
    <div className="mt-10">
      <h2 className="mb-5">Prazo de entrega</h2>
      <CepField customAction={action} />
      <DeliveryOptions deliveryOptions={deliveryOptions} />
    </div>
  );
}
