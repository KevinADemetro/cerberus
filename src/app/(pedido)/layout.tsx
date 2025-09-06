import { OrderSteps } from "@/src/features/order/components/OrderSteps";
import Link from "next/link";

function PedidoLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Link href="/" className="flex justify-center items-center py-5">
        <h1>Logo</h1>
      </Link>
      <OrderSteps />
      <div>{children}</div>
    </>
  );
}

export default PedidoLayout;
