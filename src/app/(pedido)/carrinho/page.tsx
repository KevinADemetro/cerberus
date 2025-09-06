import { StepForward } from "@/src/components/";
import { calculateTotal, PricingSummary } from "@/src/core/pricing/";
import { getCartItems, CartItemsList } from "@/src/features/cart/";
import { ShippingTime } from "@/src/core/shipping/";

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
