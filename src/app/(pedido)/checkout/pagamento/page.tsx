import { PricingSummary } from "@/src/core/pricing/components/PricingSummary";
import { createOrder } from "@/src/features/order/serverActions";
import { Button } from "@/src/components/Button";
import { calculateTotal } from "@/src/core/pricing/serverActions";

async function Page() {
  const totals = await calculateTotal();
  return (
    <div>
      <h1>Pagamento</h1>
      <PricingSummary totals={totals} />
      <form action={createOrder}>
        <Button>Finalizar pedido</Button>
      </form>
    </div>
  );
}

export default Page;
