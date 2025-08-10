import { notFound } from "next/navigation";
import ProductsList from "../../../../components/ProductsList";
import prisma from "@/src/lib/prisma";

async function Page({ params }: { params: Promise<{ filters: string[] }> }) {
  const products = await prisma.product.findMany({
    include: {
      category: true,
      variants: { take: 1 },
    },
  });
  const { filters: filtersParam } = await params;

  if (filtersParam.length % 2 !== 0) {
    notFound();
  }
  const filtros: Record<string, string> = {};

  for (let i = 0; i < filtersParam.length; i += 2) {
    const chave = filtersParam[i];
    const valor = filtersParam[i + 1];
    filtros[chave] = valor;
  }

  return (
    <div>
      <ProductsList products={products} />
    </div>
  );
}

export default Page;
