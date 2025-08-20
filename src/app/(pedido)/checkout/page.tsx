import StepForward from "@/src/components/StepForward";
import InputField from "../../../components/InputField";

function Page() {
  return (
    <div>
      <div className="p-5">
        <h2 className="mb-5">Continuar sem uma conta</h2>
        <h2 className="mb-5">Dados pessoais</h2>
        <form className="flex flex-col gap-3">
          <InputField
            placeholder="000.000.000-00"
            label="Informe seu CPF"
            required={true}
            field="cpf"
          />
          <InputField
            placeholder="DD/MM/AAAA"
            label="Data de nascimento"
            required={true}
            field="dtNascimento"
          />
          <InputField
            placeholder="Ex: nome@example.com"
            label="E-mail"
            required={true}
            field="email"
          />

          <InputField
            placeholder="(99) 99999-9999"
            label="Telefone"
            required={true}
            field="telefone"
          />
          <button>Continuar para endereço</button>
        </form>
      </div>
      {/* <StepForward href="/checkout/pagamento" /> */}
    </div>
  );
}

export default Page;
