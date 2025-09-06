import { CartItem, CartItemWithProduct } from "@/src/features/cart/";

export function CartItemsList({ cartItems }: { cartItems: CartItemWithProduct[] }) {
  return (
    <ul>
      {cartItems.map((item) => (
        <CartItem cartItem={item} key={item.id} />
      ))}
    </ul>
  );
}
