"use client";
import InputField from "../../../components/InputField";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { User, userSchema } from "../user.schema";
import { useHookFormMask } from "use-mask-input";
import { createGuestUser, getUser } from "../serverActions";
import { useEffect, useState } from "react";

function PersonalDataForm({ onSubmitSuccess }: { onSubmitSuccess: () => void }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    reset,
  } = useForm<User>({ resolver: zodResolver(userSchema) });

  const [showButton, setShowButton] = useState(true);

  useEffect(() => {
    async function fetchUser() {
      const userData = await getUser();
      reset(userData);
      if (userData) {
        onSubmitSuccess();
        setShowButton(false);
      }
    }
    fetchUser();
  }, [reset, onSubmitSuccess]);

  const onSubmit: SubmitHandler<User> = async (data) => {
    const error = await createGuestUser(data);
    if (error) {
      if (error.field && error.message) {
        setError(error.field as keyof User, {
          type: "server",
          message: error.message,
        });
      }
    } else {
      setShowButton(false);
      onSubmitSuccess();
    }
  };

  const registerWithMask = useHookFormMask(register);

  return (
    <>
      <h2 className="mb-5">Dados pessoais</h2>
      <form className="flex flex-col gap-3" onSubmit={handleSubmit(onSubmit)}>
        <InputField<User>
          placeholder="000.000.000-00"
          label="Informe seu CPF"
          field="cpf"
          inputMode="numeric"
          registerWithMask={registerWithMask}
          mask="999.999.999-99"
          error={errors["cpf"]}
        />
        <InputField<User>
          placeholder="DD/MM/AAAA"
          label="Data de nascimento"
          field="birthDate"
          registerWithMask={registerWithMask}
          mask="99/99/9999"
          error={errors["birthDate"]}
        />
        <InputField<User>
          placeholder="Ex: nome@example.com"
          label="E-mail"
          field="email"
          inputMode="email"
          register={register}
          error={errors["email"]}
        />

        <InputField<User>
          placeholder="(99) 99999-9999"
          label="Telefone"
          field="phone"
          register={register}
          registerWithMask={registerWithMask}
          mask="(99) [9]9999-9999"
          error={errors["phone"]}
          inputMode="numeric"
        />
        {showButton && (
          <button className="bg-black text-white w-full text-center py-3 rounded-full cursor-pointer">
            Continuar para endereço
          </button>
        )}
      </form>
    </>
  );
}

export default PersonalDataForm;
