import Link from "next/link";
import { ProductWithVariantAndImage, ProductCard } from "@/src/features/product";

export function ProductsList({ products }: { products: ProductWithVariantAndImage[] }) {
  return (
    <div className="grid grid-cols-2 gap-x-2 gap-y-6 justify-center px-3">
      {products.map((product: ProductWithVariantAndImage, key: number) => (
        <Link href={`/${product.slug}?cor=${product.colorId}`} key={key}>
          <ProductCard product={product} />
        </Link>
      ))}
    </div>
  );
}
