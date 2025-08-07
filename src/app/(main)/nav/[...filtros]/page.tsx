import { notFound } from "next/navigation";
import ProductsList from "../../../../components/ProductsList";

async function Page({ params }: { params: Promise<{ filtros: string[] }> }) {
  const { filtros: filtrosParam } = await params;

  if (filtrosParam.length % 2 !== 0) {
    notFound();
  }
  const filtros: Record<string, string> = {};

  for (let i = 0; i < filtrosParam.length; i += 2) {
    const chave = filtrosParam[i];
    const valor = filtrosParam[i + 1];
    filtros[chave] = valor;
  }

  const products = [];

  return (
    <div>
      <ProductsList products={products} />
    </div>
  );
}

export default Page;
