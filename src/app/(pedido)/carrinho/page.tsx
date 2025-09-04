import CartItemsList from "@/src/features/cart/components/CartItemsList";
import StepForward from "@/src/components/StepForward";
import { calculateTotal } from "@/src/core/pricing/pricing";
import { getCartItems } from "@/src/features/cart/serverActions";
import PricingSummary from "@/src/core/pricing/components/PricingSummary";

async function Page() {
  const cartItems = await getCartItems();
  const totals = calculateTotal(cartItems);
  return (
    <>
      {cartItems.length ? (
        <>
          <CartItemsList cartItems={cartItems} />
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
