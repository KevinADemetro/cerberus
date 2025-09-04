import CartItem from "@/src/features/cart/components/CartItem";
import { CartItemWithProduct } from "../CartItem.types";

function CartItemsList({ cartItems }: { cartItems: CartItemWithProduct[] }) {
  return (
    <ul>
      {cartItems.map((item) => (
        <CartItem cartItem={item} key={item.id} />
      ))}
    </ul>
  );
}

export default CartItemsList;
