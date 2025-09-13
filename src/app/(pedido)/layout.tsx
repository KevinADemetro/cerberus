import { BackButton } from "@/src/components/BackButton";
import { getPaymentMethods } from "@/src/core/payment/api/mercadoPago";
import { AcceptedPayments } from "@/src/core/payment/components/AcceptedPayments";
import { OrderSteps } from "@/src/features/order/components/OrderSteps";
import Link from "next/link";

async function PedidoLayout({ children }: { children: React.ReactNode }) {
  const methods = await getPaymentMethods();

  return (
    <>
      <div className="flex justify-between items-center px-5 py-5">
        <div className="flex-1">
          <BackButton />
        </div>
        <Link href="/" className="flex justify-center items-center flex-1">
          <h1>Logo</h1>
        </Link>
        <div className="flex-1" />
      </div>

      <OrderSteps />
      <div className="px-5">{children}</div>
      <footer>
        <AcceptedPayments methods={methods} />
      </footer>
    </>
  );
}

export default PedidoLayout;
