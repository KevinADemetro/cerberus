import ProductCard from "./ProductCard";
import { Prisma } from "@/generated/prisma/";

function ProductsList({
  products,
}: {
  products: Prisma.ProductGetPayload<{ include: { category: true } }>[];
}) {
  return (
    <div className="grid grid-cols-2 gap-x-2 gap-y-6 justify-center px-3">
      {products.map(
        (product: Prisma.ProductGetPayload<{ include: { category: true } }>) => (
          <ProductCard product={product} key={product.id} />
        )
      )}
    </div>
  );
}

export default ProductsList;
