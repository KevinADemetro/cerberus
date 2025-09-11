import { getCartItems } from "@/src/features/cart/serverActions";
import { CartDetails } from "@/src/features/cart/components/CartDetails";
import { CartItemsList } from "@/src/features/cart/components/CartItemsList";

async function Page() {
  const cartItems = await getCartItems();
  return (
    <>
      {cartItems.length ? (
        <>
          <CartItemsList cartItems={cartItems} />
          <CartDetails cartItems={cartItems} />
        </>
      ) : (
        <p>Não tens nada no carrinho</p>
      )}
    </>
  );
}

export default Page;
