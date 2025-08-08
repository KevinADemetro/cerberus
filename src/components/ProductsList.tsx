import ProductCard from "./ProductCard";
import { Product } from "@/generated/prisma/";

function ProductsList({ products }: { products: Product[] }) {
  return (
    <div className="grid grid-cols-2 gap-1 justify-center px-5">
      {products.map((product: Product) => (
        <ProductCard product={product} key={product.id} />
      ))}
    </div>
  );
}

export default ProductsList;
