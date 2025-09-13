"use client";
import { usePathname } from "next/navigation";
import { OrderStep } from "@/src/features/order/components/OrderStep";

export function OrderSteps() {
  const pathname = usePathname();
  const links = [
    { href: "/carrinho", label: "Carrinho" },
    { href: "/checkout", label: "Identificação" },
    { href: "/checkout/pagamento", label: "Pagamento" },
  ];

  return (
    <ol className="flex text-xs">
      {links.map((link, i) => {
        const isActive = pathname === link.href;
        return (
          <div key={link.href} className="flex-1">
            <OrderStep indice={i + 1} label={link.label} isActive={isActive} />
          </div>
        );
      })}
    </ol>
  );
}
