"use client";
import { useEffect } from "react";
import SideDrawer, { useSideDrawer } from "./SideDrawer";
import Link from "next/link";
import Image from "next/image";
import { Prisma } from "@/generated/prisma";
import productPlaceholder from "@/public/productPlaceholder.jpg";
import { formatCurrency } from "../utils/formatter";

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

  useEffect(() => {
    open("addedToCart");
  }, [open]);

  return (
    <SideDrawer.Window name="addedToCart" openPosition="top">
      <div className="flex flex-col justify-between h-full">
        <h2 className="my-2">Adicionado ao carrinho</h2>
        <div className="flex gap-2 text-sm">
          <div className="w-1/3">
            <Image src={productPlaceholder} alt="foto" />
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
