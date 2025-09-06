"use client";
import { ActionField } from "@/src/components/ActionField";
import { teste } from "../api/MelhorEnvio";
import { useHookFormMask } from "use-mask-input";
import { Cep, cepSchema } from "@/src/features/address/address.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";

export function ShippingTime() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<Cep>({ resolver: zodResolver(cepSchema) });
  const registerWithMask = useHookFormMask(register);

  const action: SubmitHandler<Cep> = async (data) => {
    console.log(data);
    teste();
    reset();
  };

  return (
    <div className="mt-10 p-5">
      <h2 className="mb-5">Prazo de entrega</h2>
      <ActionField<Cep>
        field="cep"
        placeholder="00000-000"
        buttonLabel="Calcular"
        mask="99999-999"
        error={errors.cep}
        action={action}
        handleSubmit={handleSubmit}
        registerWithMask={registerWithMask}
      />
    </div>
  );
}
