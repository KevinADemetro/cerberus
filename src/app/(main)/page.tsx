import Link from "next/link";
export default function Home() {
  return (
    <div className="flex flex-col">
      <Link href="/nav/categoria/camisetas">Camisetas</Link>
      <Link href="/nav/cor/branco">Roupas brancas</Link>
      <Link href="/nav/tamanho/gg">GG</Link>
    </div>
  );
}
