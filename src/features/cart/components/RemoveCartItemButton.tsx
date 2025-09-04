"use client";
import { TrashIcon } from "@heroicons/react/24/outline";
import { removeItem } from "../serverActions";

function RemoveCartItemButton({ cartItemId }: { cartItemId: number }) {
  return (
    <button onClick={() => removeItem(cartItemId)}>
      <TrashIcon className="size-6" />
    </button>
  );
}

export default RemoveCartItemButton;
