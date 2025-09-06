import { notFound } from "next/navigation";
import {
  parseProductVariantFilters,
  ProductsList,
  getProductsVariantsWithImage,
} from "@/src/features/product/";

async function Page({
  params,
  searchParams,
}: {
  params: Promise<{ filters: string[] }>;
  searchParams: Promise<{ term: string }>;
}) {
  const { filters: filtersParam } = await params;
  const { term } = await searchParams;

  if (filtersParam.length % 2 !== 0 && filtersParam.length !== 0) {
    notFound();
  }
  const filtros: Record<string, string> = {};

  for (let i = 0; i < filtersParam.length; i += 2) {
    const chave = filtersParam[i];
    const valor = filtersParam[i + 1];
    filtros[chave] = valor;
  }
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
