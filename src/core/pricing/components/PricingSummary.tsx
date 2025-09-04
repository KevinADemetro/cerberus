import { formatCurrency } from "@/src/utils/formatter";
import { PricingTotals } from "@/src/core/pricing/pricingTotals.type";

function PricingSummary({ totals }: { totals: PricingTotals }) {
  const { subtotal, shipping, total } = totals;
  return (
    <div className="mt-10 p-5">
      <h3>Resumo</h3>
      <dl className="text-sm flex flex-col gap-5 mt-5">
        <div className="flex justify-between py-2 ">
          <dt>Valor dos produtos</dt>
          <dd>{formatCurrency(subtotal)}</dd>
        </div>
        <div className="flex justify-between py-2 ">
          <dt>Frete</dt>
          <dd>{formatCurrency(shipping)}</dd>
        </div>
        <div className="flex justify-between py-2 ">
          <dt>Total da compra</dt>
          <dd>{formatCurrency(total)}</dd>
        </div>
      </dl>
    </div>
  );
}

export default PricingSummary;
