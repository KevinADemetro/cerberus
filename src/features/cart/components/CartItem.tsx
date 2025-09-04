import Link from "next/link";
import FormAddQuantity from "@/src/features/cart/FormAddQuantity";
import { formatCurrency } from "@/src/utils/formatter";
import RemoveCartItemButton from "./RemoveCartItemButton";
import { getImageByColorIdAndProductId } from "@/src/utils/productImageColor";
import prisma from "@/src/lib/prisma";
import { CartItemWithProduct } from "../CartItem.types";
import ProductImage from "@/src/components/ProductImage";

async function CartItem({ cartItem }: { cartItem: CartItemWithProduct }) {
  const { productVariant, quantity, id: cartItemId } = cartItem;
  const { product, size, colorId } = productVariant;
  const { name: colorName } = await prisma.color.findFirstOrThrow({
    where: { id: colorId },
  });
  const { id: productId, slug, name, price } = product;
  const image = await getImageByColorIdAndProductId(colorId, productId);
  const link = `/${slug}?cor=${colorId}`;

  return (
    <li className="p-5">
      <div className="flex justify-between">
        <Link href={link}>
          <h3 className="mb-5 text-sm">{name}</h3>
        </Link>
        <RemoveCartItemButton cartItemId={cartItemId} />
      </div>
      <p className="text-xs">Quantidade: {quantity}</p>
      <p className="text-xs">Cor: {colorName}</p>
      <p className="text-xs">Tamanho: {size}</p>
      <ProductImage imagePath={image.imagePath} link={link} />
      <div className="flex justify-between items-center">
        <FormAddQuantity quantity={quantity} cartItemId={cartItemId} />
        <strong>{formatCurrency(quantity * price)}</strong>
      </div>
    </li>
  );
}

export default CartItem;
