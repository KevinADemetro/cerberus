import { createOrder } from "@/src/features/order/serverActions";

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
