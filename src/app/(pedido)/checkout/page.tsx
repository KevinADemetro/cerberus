import CheckoutForm from "@/src/components/CheckoutForm";

function Page() {
  return (
    <div>
      <div className="p-5">
        <h2 className="mb-5">Continuar sem uma conta</h2>
        <h2 className="mb-5">Dados pessoais</h2>
        <CheckoutForm />
      </div>
      {/* <StepForward href="/checkout/pagamento" /> */}
    </div>
  );
}

export default Page;
