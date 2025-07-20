import { notFound } from "next/navigation";
import Teste from "../../_components/Teste";

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

  return (
    <div>
      <Teste />
    </div>
  );
}

export default Page;
