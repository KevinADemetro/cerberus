import { ProductsList } from "@/src/features/product/components/ProductsList";
import { getProductsVariantsWithImage } from "@/src/features/product/serverAction";
import { parseProductVariantFilters } from "@/src/features/product/utils";

async function Page({ searchParams }: { searchParams: Promise<{ term: string }> }) {
  const { term } = await searchParams;
  const filtros: Record<string, string> = {};
  if (term) {
    filtros["productName"] = term;
  }
  const products = await getProductsVariantsWithImage(
    parseProductVariantFilters(filtros)
  );
  return (
    <div>
      <ProductsList products={products} />
    </div>
  );
}

export default Page;
