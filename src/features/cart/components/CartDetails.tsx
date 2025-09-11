"use client";
import { PricingSummary } from "@/src/core/pricing/components/PricingSummary";
import { ShippingTime } from "@/src/core/shipping/components/ShippingTime";
import { calculateTotal } from "@/src/core/pricing/utils";
import { StepForward } from "@/src/components/StepForward";
import { CartItemWithProduct } from "../CartItem.types";
import { useState } from "react";

export function CartDetails({ cartItems }: { cartItems: CartItemWithProduct[] }) {
  const [shippingPrice, setShippingPrice] = useState(0);
  const totals = calculateTotal(cartItems, shippingPrice);

  return (
    <>
      {cartItems.length ? (
        <>
          <ShippingTime onShippingCalculate={setShippingPrice} />
          <div className="mt-10 p-5">
            <h2>Resumo</h2>
            <PricingSummary totals={totals} />
          </div>
          <StepForward href="/checkout" />
        </>
      ) : (
        <p>Não tens nada no carrinho</p>
      )}
    </>
  );
}
