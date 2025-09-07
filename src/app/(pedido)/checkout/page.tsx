import { OrderForm } from "@/src/features/order/components/OrderForm";

async function Page() {
  return (
    <div>
      <div>
        <h1 className="mb-5">Continuar sem uma conta</h1>
        <OrderForm />
      </div>
    </div>
  );
}

export default Page;
