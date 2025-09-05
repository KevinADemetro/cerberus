import OrderForm from "@/src/features/order/components/OrderForm";

async function Page() {
  return (
    <div>
      <div className="p-5">
        <h2 className="mb-5">Continuar sem uma conta</h2>
        <OrderForm />
      </div>
    </div>
  );
}

export default Page;
