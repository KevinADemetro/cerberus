import CheckoutForm from "@/src/components/CheckoutForm";
import { cookies } from "next/headers";

async function Page() {
  return (
    <div>
      <div className="p-5">
        <h2 className="mb-5">Continuar sem uma conta</h2>
        <CheckoutForm />
      </div>
    </div>
  );
}

export default Page;
