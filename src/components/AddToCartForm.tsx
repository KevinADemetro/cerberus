"use client";
import { handleAddToCart } from "@/src/actions/cart";
import ProductSizes from "./ProductSizes";
import { StickyBottom } from "./StickyBottom";
import { Prisma } from "@/generated/prisma";
import { getProductVariantBy } from "../utils/productVariant";
import { useState } from "react";

function AddToCartForm({
  product,
}: {
  product: Prisma.ProductGetPayload<{ include: { category: true; variants: true } }>;
}) {
  const [showSizeError, setShowSizeError] = useState(false);
  const [selected, setSelected] = useState(0);

  async function handleSubmit(e: FormData) {
    const id = Number(e.get("variantId"));
    if (!id) {
      setShowSizeError(true);
      return;
    }

    const variant = await getProductVariantBy(id);
    if (!variant) {
      alert("deu ruim");
      return;
    }

    handleAddToCart(variant);
    setSelected(0);
  }

  return (
    <>
      <form id="addToCartForm" action={handleSubmit}>
        <ProductSizes
          sizes={product.variants}
          setShowSizeError={setShowSizeError}
          selected={selected}
          setSelected={setSelected}
        />
        {showSizeError && (
          <p className="text-red-500 text-sm text-center my-2">
            Selecione um tamanho para continuar
          </p>
        )}
      </form>
      <StickyBottom>
        <div className="mx-5 grid grid-cols-1">
          <button className="text-white bg-black py-5 rounded-full" form="addToCartForm">
            Adicionar ao carrinho
          </button>
        </div>
      </StickyBottom>
    </>
  );
}

export default AddToCartForm;
