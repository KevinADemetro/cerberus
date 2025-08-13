import { Prisma } from "@/generated/prisma";
import Image from "next/image";
import productPlaceholder from "@/public/productPlaceholder.jpg";
import Link from "next/link";
import FormAddQuantity from "./FormAddQuantity";
import { formatCurrency } from "../utils/formatter";
import RemoveCartItemButton from "./RemoveCartItemButton";
function CartItem({
  cartItem,
}: {
  cartItem: Prisma.CartItemGetPayload<{
    include: { productVariant: { include: { product: true } } };
  }>;
}) {
  const { productVariant, quantity, id: cartItemId } = cartItem;
  const { product, color, size } = productVariant;
  const { slug, name, price } = product;

  return (
    <li className="p-5">
      <div className="flex justify-between">
        <Link href={`/${slug}?cor=${color}`}>
          <h3 className="mb-5 text-sm">{name}</h3>
        </Link>
        <RemoveCartItemButton cartItemId={cartItemId} />
      </div>
      <p className="text-xs">Quantidade: {quantity}</p>
      <p className="text-xs">Cor: {color}</p>
      <p className="text-xs">Tamanho: {size}</p>
      <div className="my-5 w-full">
        <Link href={`/${slug}?cor=${color}`}>
          <Image
            className="object-cover w-full h-full"
            src={productPlaceholder}
            alt="product photo"
          />
        </Link>
      </div>
      <div className="flex justify-between items-center">
        <FormAddQuantity quantity={quantity} cartItemId={cartItemId} />
        <strong>{formatCurrency(quantity * price)}</strong>
      </div>
    </li>
  );
}

export default CartItem;
