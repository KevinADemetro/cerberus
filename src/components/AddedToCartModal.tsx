"use client";
import { useEffect, useState } from "react";
import SideDrawer, { useSideDrawer } from "./SideDrawer";
import Link from "next/link";
import Image from "next/image";
import { Prisma } from "@/generated/prisma";
import { formatCurrency } from "../utils/formatter";
import { getImageByColorIdAndProductId } from "../utils/productImageColor";

function AddedToCartModal({
  onClose,
  productVariant,
}: {
  onClose: () => void;
  productVariant: Prisma.ProductVariantGetPayload<{
    include: { product: { include: { category: true } } };
  }>;
}) {
  return (
    <SideDrawer onClose={onClose}>
      <AddedToCartModalContent productVariant={productVariant} />
    </SideDrawer>
  );
}

function AddedToCartModalContent({
  productVariant,
}: {
  productVariant: Prisma.ProductVariantGetPayload<{
    include: { product: { include: { category: true } } };
  }>;
}) {
  const { open } = useSideDrawer();
  const [imagePath, setImagePath] = useState("");

  useEffect(() => {
    async function fetchImage() {
      const img = await getImageByColorIdAndProductId(
        productVariant.colorId,
        productVariant.productId
      );
      setImagePath(img.imagePath);
    }
    fetchImage();
    open("addedToCart");
  }, [open, productVariant.colorId, productVariant.productId]);

  return (
    <SideDrawer.Window name="addedToCart" openPosition="top">
      <div className="flex flex-col justify-between h-full">
        <h2 className="my-2">Adicionado ao carrinho</h2>
        <div className="flex gap-2 text-sm">
          <div className="relative w-1/3">
            {imagePath !== "" && (
              <Image src={imagePath} alt="foto" fill className="object-cover" />
            )}
          </div>
          <ul className="flex flex-col justify-between">
            <li>{productVariant.product.name}</li>
            <li>{productVariant.product.category.title}</li>
            <li>Tamanho: {productVariant.size}</li>
            <li>
              <strong>{formatCurrency(productVariant.product.price)}</strong>
            </li>
          </ul>
        </div>
        <Link href="/carrinho">
          <div className="text-white bg-black text-center rounded-full py-5">
            Ver carrinho
          </div>
        </Link>
      </div>
    </SideDrawer.Window>
  );
}

export default AddedToCartModal;
