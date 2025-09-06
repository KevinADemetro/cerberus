"use client";
import { InputField } from "@/src/components/";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Address,
  addressSchema,
  createAddress,
  getAddress,
} from "@/src/features/address";
import { useHookFormMask } from "use-mask-input";
import { useEffect, useState } from "react";
import { redirect } from "next/navigation";

export function AddressForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    reset,
    setValue,
    getValues,
  } = useForm<Address>({ resolver: zodResolver(addressSchema) });

  const registerWithMask = useHookFormMask(register);
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

      setValue("street", data.logradouro ?? "");
      setValue("neighborhood", data.bairro ?? "");
      setValue("city", data.localidade ?? "");
      setValue("state", data.uf ?? "");
      setStep("full");
    } catch (err: any) {
      setError("cep", { type: "manual", message: err.message });
    }
  }

  const handleCepSubmit = async () => {
    const cep = getValues("cep");
    await fetchAddressByCep(cep);
  };

  const handleFullSubmit: SubmitHandler<Address> = async (data) => {
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
      <form
        className="flex flex-col gap-3 text-sm"
        onSubmit={handleSubmit(handleFullSubmit)}
      >
        <InputField<Address>
          placeholder="00000-000"
          label="CEP"
          field="cep"
          registerWithMask={registerWithMask}
          mask="99999-999"
          error={errors.cep}
        />

        <button
          className="bg-black text-white w-full text-center py-3 rounded-full cursor-pointer"
          type="button"
          onClick={handleCepSubmit}
        >
          {step === "cep" ? "Continuar" : "Alterar CEP"}
        </button>

        {step === "full" && (
          <>
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
            <button className="bg-black text-white w-full text-center py-3 rounded-full cursor-pointer">
              Continuar
            </button>
          </>
        )}
      </form>
    </>
  );
}
