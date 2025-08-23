import { MinusIcon, PlusIcon } from "@heroicons/react/24/outline";
import { handleChangeQuantity } from "../utils/cart";

function FormAddQuantity({
  quantity,
  cartItemId,
}: {
  quantity: number;
  cartItemId: number;
}) {
  return (
    <form action={handleChangeQuantity} className="flex items-center">
      <button
        className="text-gray-600 border border-gray-300 w-8 h-8 flex items-center justify-center"
        name="action"
        value="decrement"
      >
        <MinusIcon className="size-6" />
      </button>
      <input type="hidden" name="cartItemId" value={cartItemId} />
      <input type="hidden" name="quantity" value={quantity} />
      <span className="border border-gray-300 w-8 h-8 flex items-center justify-center">
        {quantity}
      </span>
      <button
        className="text-gray-600 border border-gray-300 w-8 h-8 flex items-center justify-center"
        name="action"
        value="increment"
      >
        <PlusIcon className="size-6" />
      </button>
    </form>
  );
}

export default FormAddQuantity;
