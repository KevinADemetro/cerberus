"use client";
import InputField from "./InputField";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Account, accountSchema } from "../utils/account.schema";

function CheckoutForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Account>({ resolver: zodResolver(accountSchema) });
  const onSubmit: SubmitHandler<Account> = (data) => console.log(data);

  console.log(errors);
  return (
    <>
      <form className="flex flex-col gap-3" onSubmit={handleSubmit(onSubmit)}>
        <InputField<Account>
          placeholder="000.000.000-00"
          label="Informe seu CPF"
          field="cpf"
          register={register}
        />
        <InputField<Account>
          placeholder="DD/MM/AAAA"
          label="Data de nascimento"
          field="birthDate"
          register={register}
        />
        <InputField<Account>
          placeholder="Ex: nome@example.com"
          label="E-mail"
          field="email"
          register={register}
        />

        <InputField<Account>
          placeholder="(99) 99999-9999"
          label="Telefone"
          field="fone"
          register={register}
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
