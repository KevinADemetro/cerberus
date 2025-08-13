import { Prisma } from "@/generated/prisma/";
import CartItem from "./CartItem";

function CartItemsList({
  cartItems,
}: {
  cartItems: Prisma.CartItemGetPayload<{
    include: { productVariant: { include: { product: true } } };
  }>[];
}) {
  return (
    <ul>
      {cartItems.map((item) => (
        <CartItem cartItem={item} key={item.id} />
      ))}
    </ul>
  );
}

export default CartItemsList;
