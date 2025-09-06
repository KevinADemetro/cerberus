import { createOrder } from "@/src/features/order/";

function Page() {
  return (
    <div>
      <form action={createOrder}>
        <button>Finalizar pedido</button>
      </form>
    </div>
  );
}

export default Page;
