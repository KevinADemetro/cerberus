import CartItemsList from "@/src/components/CartItemsList";
import prisma from "@/src/lib/prisma";
import { cookies } from "next/headers";

async function Page() {
  const cookieStore = await cookies();
  const cartUuid = await cookieStore.get("cartUuid");

  const cartItems = await prisma.cartItem.findMany({
    include: { productVariant: { include: { product: true } } },
    where: { cartId: cartUuid?.value ?? "__invalid_id__" },
  });

  return (
    <>
      {cartItems.length ? (
        <CartItemsList cartItems={cartItems} />
      ) : (
        <p>Não tens carrinho chefia</p>
      )}
    </>
  );
}

export default Page;
