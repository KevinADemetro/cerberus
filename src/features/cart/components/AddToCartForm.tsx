"use client";
import { useRef, useState } from "react";

import AddedToCartModal from "./AddedToCartModal";
import { handleAddToCart } from "@/src/features/cart/serverActions";
import ProductSizes from "../../product/components/ProductSizes";
import { getProductVariantBy } from "../../product/serverAction";
import { StickyBottom } from "@/src/components/StickyBottom";
import {
  ProductFull,
  ProductVariantWithCategory,
} from "@/src/features/product/product.types";

function AddToCartForm({ product }: { product: ProductFull }) {
  const [showSizeError, setShowSizeError] = useState(false);
  const [openAddeToModal, setOpenAddeToModal] = useState(false);
  const [selected, setSelected] = useState(0);
  const sizeSectionRef = useRef<HTMLFormElement>(null);
  const [productVariant, setProductVariant] = useState<ProductVariantWithCategory | null>(
    null
  );

  async function handleSubmit(e: FormData) {
    const id = Number(e.get("variantId"));
    if (!id) {
      setShowSizeError(true);
      sizeSectionRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
      return;
    }

    const variant = await getProductVariantBy(id);
    if (!variant) {
      throw new Error("Algo deu errado");
    }

    handleAddToCart(variant).then(() => {
      setOpenAddeToModal(true);
    });
    setProductVariant(variant);
    setSelected(0);
  }

  return (
    <>
      {openAddeToModal && productVariant && (
        <AddedToCartModal
          productVariant={productVariant}
          onClose={() => setOpenAddeToModal(false)}
        />
      )}
      <form id="addToCartForm" action={handleSubmit} ref={sizeSectionRef}>
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
