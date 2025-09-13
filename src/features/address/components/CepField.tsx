"use client";
import { useHookFormMask } from "use-mask-input";
import { Cep, cepSchema } from "@/src/features/address/address.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { ActionField } from "@/src/components/ActionField";
import { InputField } from "@/src/components/InputField";
import { useEffect } from "react";
import Label from "@/src/components/Label";

export function CepField({
  customAction = () => {},
  type = "actionField",
  children,
  actionLabel = "Calcular",
  value,
}: {
  customAction?: (cep: string) => void;
  type?: "actionField" | "form";
  children?: React.ReactNode;
  actionLabel?: string;
  value?: string;
}) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm<Cep>({ resolver: zodResolver(cepSchema) });

  useEffect(() => {
    const cep = value !== undefined ? value : localStorage.getItem("cep");
    localStorage.setItem("cep", cep ?? "");
    if (cep) {
      setValue("cep", cep);
    }
  }, [setValue, value]);

  const registerWithMask = useHookFormMask(register);

  const action: SubmitHandler<Cep> = async (data) => {
    localStorage.setItem("cep", data.cep);
    customAction(data.cep);
    reset({ cep: data.cep });
  };

  return (
    <div className="flex flex-col">
      <Label htmlFor="cep">CEP</Label>
      {type === "actionField" ? (
        <ActionField<Cep>
          field="cep"
          placeholder="00000-000"
          buttonLabel={actionLabel}
          mask="99999-999"
          error={errors.cep}
          action={action}
          handleSubmit={handleSubmit}
          registerWithMask={registerWithMask}
        />
      ) : type === "form" ? (
        <form onSubmit={handleSubmit(action)}>
          <InputField<Cep>
            field="cep"
            placeholder="00000-000"
            mask="99999-999"
            error={errors.cep}
            registerWithMask={registerWithMask}
            className="mb-5"
          />
          {children}
        </form>
      ) : null}
    </div>
  );
}
