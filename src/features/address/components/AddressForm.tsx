"use client";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { redirect } from "next/navigation";
import { Address, addressSchema } from "../address.schema";
import { createAddress, getAddress } from "../serverAction";
import { InputField } from "@/src/components/InputField";
import { CepField } from "./CepField";
import { Button } from "@/src/components/Button";

export function AddressForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    reset,
    setValue,
  } = useForm<Address>({ resolver: zodResolver(addressSchema) });

  const [step, setStep] = useState<"cep" | "full">("cep");
  const [guestAddress, setGuestAddress] = useState<Address | null>(null);

  useEffect(() => {
    async function fetchAddress() {
      const addressData = await getAddress();
      if (addressData) {
        reset(addressData);
        setStep("full");
        setGuestAddress(addressData);
      }
    }
    fetchAddress();
  }, [reset]);

  async function fetchAddressByCep(cep: string) {
    try {
      const sanitizedCep = cep.replace(/\D/g, "");
      const response = await fetch(`https://viacep.com.br/ws/${sanitizedCep}/json/`);
      const data = await response.json();
      if (data.erro) throw new Error("CEP não encontrado");

      setValue("cep", data.cep ?? "");
      setValue("street", data.logradouro ?? "");
      setValue("neighborhood", data.bairro ?? "");
      setValue("city", data.localidade ?? "");
      setValue("state", data.uf ?? "");
      setStep("full");
    } catch (err: any) {
      setError("cep", { type: "manual", message: err.message });
    }
  }

  const handleCepSubmit = async (cep: string) => {
    await fetchAddressByCep(cep);
  };

  const submit: SubmitHandler<Address> = async (data) => {
    localStorage.removeItem("cep");
    if (!guestAddress) {
      const error = await createAddress(data);
      if (error?.field && error.message) {
        setError(error.field as keyof Address, {
          type: "server",
          message: error.message,
        });
      } else {
        redirect("/checkout/pagamento");
      }
    } else {
      redirect("/checkout/pagamento");
    }
  };

  return (
    <>
      <h2 className="my-5 text-base">Endereço de entrega</h2>
      <div className="flex flex-col gap-3 text-sm">
        <>
          <CepField
            type={step === "cep" ? "form" : "actionField"}
            customAction={handleCepSubmit}
            actionLabel={step === "cep" ? "" : "Atualizar"}
          >
            <Button>Continuar</Button>
          </CepField>
        </>

        {step === "full" && (
          <form onSubmit={handleSubmit(submit)} className="flex flex-col gap-3">
            <input type="hidden" {...register("cep")} />
            <InputField<Address>
              placeholder="Nome completo do destinatário"
              label="Nome do destinatário"
              field="receiverName"
              register={register}
              error={errors.receiverName}
            />
            <InputField<Address>
              placeholder="Rua, avenida, etc."
              label="Rua"
              field="street"
              register={register}
              error={errors.street}
            />
            <InputField<Address>
              placeholder="Número"
              label="Número"
              field="number"
              register={register}
              error={errors.number}
            />
            <InputField<Address>
              placeholder="Complemento"
              label="Complemento"
              field="complement"
              register={register}
              error={errors.complement}
            />
            <InputField<Address>
              placeholder="Bairro"
              label="Bairro"
              field="neighborhood"
              register={register}
              error={errors.neighborhood}
            />
            <InputField<Address>
              placeholder="Cidade"
              label="Cidade"
              field="city"
              register={register}
              error={errors.city}
            />
            <InputField<Address>
              placeholder="Estado"
              label="Estado"
              field="state"
              register={register}
              error={errors.state}
            />
            <Button>Continuar</Button>
          </form>
        )}
      </div>
    </>
  );
}
