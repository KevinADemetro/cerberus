"use client";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { notFound, redirect } from "next/navigation";
import { Address, addressSchema } from "../address.schema";
import { createAddress, getAddress, updateGuestAddress } from "../serverAction";
import { InputField } from "@/src/components/InputField";
import { CepField } from "./CepField";
import { Button } from "@/src/components/Button";
import { DeliveryOption } from "@/src/core/shipping/components/DeliveryOption";
import { DeliveryOption as DeliveryOptionType } from "@/src/core/shipping/shipping.types";
import { calculateShipping } from "@/src/core/shipping/api/melhorEnvio";
import { prepareShippingCart } from "@/src/features/cart/serverActions";

export function AddressForm() {
  const [deliveryOption, setDeliveryOption] = useState<DeliveryOptionType | null>(null);

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
  const [cep, setCep] = useState<string | undefined>();

  useEffect(() => {
    async function fetchAddress() {
      const addressData = await getAddress();
      if (addressData) {
        setDeliveryOption(await calculateShipping(addressData.cep)); // passar itens nessa função
        setCep(addressData.cep);
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
    setDeliveryOption(await calculateShipping(cep));
  };

  const submit: SubmitHandler<Address> = async (data) => {
    localStorage.removeItem("cep");
    const addressId = guestAddress
      ? await updateGuestAddress(data)
      : await createAddress(data);

    if (addressId) {
      if (deliveryOption) {
        await prepareShippingCart(deliveryOption, addressId);
        redirect("/checkout/pagamento");
      } else {
        notFound();
      }
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
            value={cep}
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
              disabled={true}
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
              disabled={true}
            />
            <InputField<Address>
              placeholder="Cidade"
              label="Cidade"
              field="city"
              register={register}
              error={errors.city}
              disabled={true}
            />
            <InputField<Address>
              placeholder="Estado"
              label="Estado"
              field="state"
              register={register}
              error={errors.state}
              disabled={true}
            />
            {deliveryOption && (
              <div>
                <h2>Entrega</h2>
                <DeliveryOption deliveryOption={deliveryOption} />
              </div>
            )}
            <Button>Continuar</Button>
          </form>
        )}
      </div>
    </>
  );
}
