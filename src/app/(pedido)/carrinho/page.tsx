import { StepForward } from "@/src/components/StepForward";
import { PricingSummary } from "@/src/core/pricing/components/PricingSummary";
import { ShippingTime } from "@/src/core/shipping/components/ShippingTime";
import { CartItemsList } from "@/src/features/cart/components/CartItemsList";
import { getCartItems } from "@/src/features/cart/serverActions";
import { calculateTotal } from "@/src/core/pricing/utils";

async function Page() {
  const cartItems = await getCartItems();
  const totals = calculateTotal(cartItems);
  return (
    <>
      {cartItems.length ? (
        <>
          <CartItemsList cartItems={cartItems} />
          <ShippingTime />
          <div className="mt-10 p-5">
            <h2>Resumo</h2>
            <PricingSummary totals={totals} />
          </div>
          <StepForward href="/checkout" />
        </>
      ) : (
        <p>Não tens nada no carrinho</p>
      )}
    </>
  );
}

export default Page;
