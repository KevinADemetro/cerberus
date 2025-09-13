"use client";
import { useState } from "react";
import { calculateShipping } from "../api/melhorEnvio";
import { CepField } from "@/src/features/address/components/CepField";
import { DeliveryOption as DeliveryOptionType } from "../shipping.types";
import { DeliveryOption } from "./DeliveryOption";

export function ShippingTime({
  onShippingCalculate,
}: {
  onShippingCalculate?: (price: number) => void;
}) {
  const [deliveryOption, setDeliveryOption] = useState<DeliveryOptionType | null>(null);

  const action = async (cep: string) => {
    const option = await calculateShipping(cep);
    setDeliveryOption(option);
    if (onShippingCalculate) {
      onShippingCalculate(option.price);
    }
  };

  return (
    <div className="mt-10">
      <h2 className="mb-5">Prazo de entrega</h2>
      <CepField customAction={action} />
      {deliveryOption && <DeliveryOption deliveryOption={deliveryOption} />}
    </div>
  );
}
