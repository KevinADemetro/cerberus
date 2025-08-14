import { Prisma } from "@/generated/prisma";
import Image from "next/image";
import Link from "next/link";
import FormAddQuantity from "./FormAddQuantity";
import { formatCurrency } from "../utils/formatter";
import RemoveCartItemButton from "./RemoveCartItemButton";
import { getImageByColorIdAndProductId } from "../utils/productImageColor";
import prisma from "../lib/prisma";
async function CartItem({
  cartItem,
}: {
  cartItem: Prisma.CartItemGetPayload<{
    include: { productVariant: { include: { product: true } } };
  }>;
}) {
  const { productVariant, quantity, id: cartItemId } = cartItem;
  const { product, size, colorId } = productVariant;
  const { name: colorName } = await prisma.color.findFirstOrThrow({
    where: { id: colorId },
  });
  const { id: productId, slug, name, price } = product;
  const image = await getImageByColorIdAndProductId(colorId, productId);

  return (
    <li className="p-5">
      <div className="flex justify-between">
        <Link href={`/${slug}?cor=${colorId}`}>
          <h3 className="mb-5 text-sm">{name}</h3>
        </Link>
        <RemoveCartItemButton cartItemId={cartItemId} />
      </div>
      <p className="text-xs">Quantidade: {quantity}</p>
      <p className="text-xs">Cor: {colorName}</p>
      <p className="text-xs">Tamanho: {size}</p>
      <div className="my-5 aspect-square relative">
        <Link href={`/${slug}?cor=${colorId}`}>
          <Image
            className="object-cover"
            src={image.imagePath}
            fill
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
