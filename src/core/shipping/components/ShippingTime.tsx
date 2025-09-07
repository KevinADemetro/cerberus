"use client";
import { teste } from "../api/MelhorEnvio";
import { CepField } from "@/src/features/address/components/CepField";

export function ShippingTime() {
  const action = async (cep: string) => {
    console.log(cep);
    teste();
  };

  return (
    <div className="mt-10">
      <h2 className="mb-5">Prazo de entrega</h2>
      <CepField customAction={action} />
    </div>
  );
}
