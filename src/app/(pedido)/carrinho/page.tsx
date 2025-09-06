import { StepForward } from "@/src/components/StepForward";
import { PricingSummary } from "@/src/core/pricing/components/PricingSummary";
import { calculateTotal } from "@/src/core/pricing/utils";
import { ShippingTime } from "@/src/core/shipping/components/ShippingTime";
import { CartItemsList } from "@/src/features/cart/components/CartItemsList";
import { getCartItems } from "@/src/features/cart/serverActions";

async function Page() {
  const cartItems = await getCartItems();
  const totals = calculateTotal(cartItems);
  return (
    <>
      {cartItems.length ? (
        <>
          <CartItemsList cartItems={cartItems} />
          <ShippingTime />
          <PricingSummary totals={totals} />
          <StepForward href="/checkout" />
        </>
      ) : (
        <p>Não tens nada no carrinho</p>
      )}
    </>
  );
}

export default Page;
