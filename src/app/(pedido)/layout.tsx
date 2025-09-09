import { getPaymentMethods } from "@/src/core/payment/api/mercadoPago";
import { AcceptedPayments } from "@/src/core/payment/components/AcceptedPayments";
import { OrderSteps } from "@/src/features/order/components/OrderSteps";
import Link from "next/link";

async function PedidoLayout({ children }: { children: React.ReactNode }) {
  const methods = await getPaymentMethods();

  return (
    <>
      <Link href="/" className="flex justify-center items-center py-5">
        <h1>Logo</h1>
      </Link>
      <OrderSteps />
      <div className="px-5">{children}</div>
      <footer>
        <AcceptedPayments methods={methods} />
      </footer>
    </>
  );
}

export default PedidoLayout;
