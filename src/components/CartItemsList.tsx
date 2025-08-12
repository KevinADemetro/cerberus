import { Prisma } from "@/generated/prisma/";

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
        <p key={item.id}>{item.productVariant.product.name}</p>
      ))}
    </ul>
  );
}

export default CartItemsList;
