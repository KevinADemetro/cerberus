"use client";
import InputField from "./InputField";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { User, userSchema } from "../utils/user.schema";
import { useHookFormMask } from "use-mask-input";
import { createGuestUser } from "../utils/user";

function CheckoutForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<User>({ resolver: zodResolver(userSchema) });

  const onSubmit: SubmitHandler<User> = async (data) => {
    const error = await createGuestUser(data);
    console.log(errors);
    if (error) {
      if (error.field && error.message) {
        setError(error.field as keyof User, {
          type: "server",
          message: error.message,
        });
      }
    }
  };

  const registerWithMask = useHookFormMask(register);

  return (
    <>
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
        <button>Continuar para endereço</button>
      </form>

      {/* {showCepField && (
        <>
          <h2 className="my-3">Endereço de entrega</h2>
          <InputField placeholder="00000-000" label="CEP" required={true} field="cep" />
          <button>Continuar</button>
        </>
      )}
      {showShippingFields && (
        <>
          <InputField
            placeholder=""
            label="Nome completo de quem irá receber"
            required={true}
            field="receiverName"
          />
          <InputField placeholder="" label="Endereço" required={true} field="address" />
          <InputField placeholder="" label="Número" required={true} field="number" />
          <InputField
            placeholder=""
            label="Complemento"
            required={true}
            field="complement"
          />
          <InputField
            placeholder=""
            label="Bairro"
            required={true}
            field="neighborhood"
          />
          <InputField placeholder="" label="Cidade" required={true} field="city" />
          <InputField placeholder="" label="Estado" required={true} field="state" />
        </>
      )} */}
    </>
  );
}

export default CheckoutForm;
