import ProductCard from "./ProductCard";
import { Product } from "@/generated/prisma/";

function ProductsList({ products }: { products: Product[] }) {
  return (
    <div className="grid grid-cols-2 gap-x-2 gap-y-6 justify-center px-3">
      {products.map((product: Product) => (
        <ProductCard product={product} key={product.id} />
      ))}
    </div>
  );
}

export default ProductsList;
