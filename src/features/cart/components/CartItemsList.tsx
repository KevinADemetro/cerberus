import { CartItemWithProduct } from "@/src/features/cart/CartItem.types";
import { CartItem } from "@/src/features/cart/components/CartItem";
export function CartItemsList({ cartItems }: { cartItems: CartItemWithProduct[] }) {
  return (
    <ul>
      {cartItems.map((item) => (
        <CartItem cartItem={item} key={item.id} />
      ))}
    </ul>
  );
}
