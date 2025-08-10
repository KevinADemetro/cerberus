import { handleAction } from "../actions/cart";
import ProductSizes from "./ProductSizes";
import { StickyBottom } from "./StickyBottom";
import { Prisma } from "@/generated/prisma";

function AddToCartForm({
  product,
}: {
  product: Prisma.ProductGetPayload<{ include: { category: true; variants: true } }>;
}) {
  return (
    <>
      <form id="addToCartForm" action={handleAction}>
        <ProductSizes sizes={product.variants} />
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
