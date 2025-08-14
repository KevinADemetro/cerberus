"use client";
import { handleAddToCart } from "@/src/actions/cart";
import ProductSizes from "./ProductSizes";
import { StickyBottom } from "./StickyBottom";
import { Prisma } from "@/generated/prisma";
import { getProductVariantBy } from "../utils/productVariant";
import { useState } from "react";
import AddedToCartModal from "./AddedToCartModal";

function AddToCartForm({
  product,
}: {
  product: Prisma.ProductGetPayload<{ include: { category: true; variants: true } }>;
}) {
  const [showSizeError, setShowSizeError] = useState(false);
  const [openAddeToModal, setOpenAddeToModal] = useState(false);
  const [selected, setSelected] = useState(0);
  const [productVariant, setProductVariant] = useState<
    Prisma.ProductVariantGetPayload<{
      include: { product: { include: { category: true } } };
    }>
  >({
    id: 0,
    color: "",
    size: "",
    productId: 0,
    stock: 0,
    product: {
      id: 0,
      slug: "",
      name: "",
      price: 0,
      description: "",
      starRating: 0,
      discountRate: 0,
      categoryId: 0,
      category: {
        id: 0,
        title: "",
      },
    },
  });
  async function handleSubmit(e: FormData) {
    const id = Number(e.get("variantId"));
    if (!id) {
      setShowSizeError(true);
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
      {openAddeToModal && (
        <AddedToCartModal
          productVariant={productVariant}
          onClose={() => setOpenAddeToModal(false)}
        />
      )}
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
