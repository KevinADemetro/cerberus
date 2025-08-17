import ProductsList from "@/src/components/ProductsList";
import { getProductsVariantsWithImage } from "@/src/utils/productVariant";
import { parseProductVariantFilters } from "@/src/utils/productVariantFilters";

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
