import Link from "next/link";
function PedidoLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Link href="/">
        <h1>Logo</h1>
      </Link>
      <div>{children}</div>
    </>
  );
}

export default PedidoLayout;
