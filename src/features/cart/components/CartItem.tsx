import Link from "next/link";
import { formatCurrency } from "@/src/utils/formatter";
import { CartItemWithProduct } from "../CartItem.types";
import {
  getColorBy,
  getImageByColorIdAndProductId,
} from "@/src/features/product/serverAction";
import { RemoveCartItemButton } from "./RemoveCartItemButton";
import { ProductImage } from "@/src/features/product/components/ProductImage";
import { FormAddQuantity } from "@/src/features/cart/components/FormAddQuantity";

export async function CartItem({ cartItem }: { cartItem: CartItemWithProduct }) {
  const { productVariant, quantity, id: cartItemId } = cartItem;
  const { product, size, colorId } = productVariant;
  const { name: colorName } = await getColorBy(colorId);
  const { id: productId, slug, name, price } = product;
  const image = await getImageByColorIdAndProductId(colorId, productId);
  const link = `/${slug}?cor=${colorId}`;

  return (
    <li className="p-5">
      <div className="flex justify-between">
        <Link href={link}>
          <h4 className="mb-5 text-sm">{name}</h4>
        </Link>
        <RemoveCartItemButton cartItemId={cartItemId} />
      </div>
      <p>Quantidade: {quantity}</p>
      <p>Cor: {colorName}</p>
      <p>Tamanho: {size}</p>
      <ProductImage imagePath={image.imagePath} link={link} className="my-5" />
      <div className="flex justify-between items-center">
        <FormAddQuantity quantity={quantity} cartItemId={cartItemId} />
        <strong>{formatCurrency(quantity * price)}</strong>
      </div>
    </li>
  );
}
