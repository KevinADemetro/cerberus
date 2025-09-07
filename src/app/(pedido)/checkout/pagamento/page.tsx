import { PricingSummary } from "@/src/core/pricing/components/PricingSummary";
import { createOrder } from "@/src/features/order/serverActions";
import { getCartItems } from "@/src/features/cart/serverActions";
import { calculateTotal } from "@/src/core/pricing/utils";
import { Button } from "@/src/components/Button";

async function Page() {
  const cartItems = await getCartItems();
  const totals = calculateTotal(cartItems);
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
