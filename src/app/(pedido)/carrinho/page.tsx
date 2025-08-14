import CartItemsList from "@/src/components/CartItemsList";
import prisma from "@/src/lib/prisma";
import { formatCurrency } from "@/src/utils/formatter";
import { cookies } from "next/headers";

async function Page() {
  const cookieStore = await cookies();
  const cartUuid = await cookieStore.get("cartUuid");

  const cartItems = await prisma.cartItem.findMany({
    include: { productVariant: { include: { product: true } } },
    where: { cartId: cartUuid?.value ?? "__invalid_id__" },
    orderBy: { id: "desc" },
  });

  return (
    <>
      {cartItems.length ? (
        <>
          <CartItemsList cartItems={cartItems} />
          <div className="mt-10 p-5">
            <h3>Resumo</h3>
            <dl className="text-sm flex flex-col gap-5 mt-5">
              <div className="flex justify-between py-2 ">
                <dt>Valor dos produtos</dt>
                <dd>{formatCurrency(123)}</dd>
              </div>
              <div className="flex justify-between py-2 ">
                <dt>Frete</dt>
                <dd>Grátis</dd>
              </div>
              <div className="flex justify-between py-2 ">
                <dt>Total da compra</dt>
                <dd>{formatCurrency(123)}</dd>
              </div>
            </dl>
          </div>
        </>
      ) : (
        <p>Não tens carrinho chefia</p>
      )}
    </>
  );
}

export default Page;
