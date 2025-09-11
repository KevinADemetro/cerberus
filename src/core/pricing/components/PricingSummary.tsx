import { formatCurrency } from "@/src/utils/formatter";
import { PricingTotals } from "@/src/core/pricing/pricingTotals.type";

export function PricingSummary({ totals }: { totals: PricingTotals }) {
  const { subtotal, shipping, total } = totals;
  return (
    <dl className="text-sm flex flex-col gap-5 mt-5">
      <div className="flex justify-between py-2 ">
        <dt>Valor dos produtos</dt>
        <dd>{formatCurrency(subtotal)}</dd>
      </div>
      <div className="flex justify-between py-2 ">
        <dt>Frete</dt>
        <dd>{shipping > 0 ? formatCurrency(shipping) : "A calcular"}</dd>
      </div>
      <div className="flex justify-between py-2 ">
        <dt>Total da compra</dt>
        <dd>{formatCurrency(total)}</dd>
      </div>
    </dl>
  );
}
