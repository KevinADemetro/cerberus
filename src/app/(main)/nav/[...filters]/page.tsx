import { notFound } from "next/navigation";
import ProductsList from "../../../../components/ProductsList";
import { getProductsVariantsWithImage } from "@/src/utils/productVariant";
import { parseProductVariantFilters } from "@/src/utils/productVariantFilters";

async function Page({ params }: { params: Promise<{ filters: string[] }> }) {
  const { filters: filtersParam } = await params;

  if (filtersParam.length % 2 !== 0 && filtersParam.length !== 0) {
    notFound();
  }
  const filtros: Record<string, string> = {};

  for (let i = 0; i < filtersParam.length; i += 2) {
    const chave = filtersParam[i];
    const valor = filtersParam[i + 1];
    filtros[chave] = valor;
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
