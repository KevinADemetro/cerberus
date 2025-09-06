"use client";
import { usePathname } from "next/navigation";
import { OrderStep } from "@/src/features/order";
import Link from "next/link";

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
          <Link href={link.href} key={link.href} className="flex-1">
            <OrderStep indice={i + 1} label={link.label} isActive={isActive} />
          </Link>
        );
      })}
    </ol>
  );
}
