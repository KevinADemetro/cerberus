"use client";
import { initMercadoPago, Wallet } from "@mercadopago/sdk-react";

export function MercadoPagoButton() {
  initMercadoPago("APP_USR-553e265f-03b6-424d-b374-60181f3e7576");

  return (
    <div>
      <Wallet
        initialization={{
          preferenceId: "2661655530-917c2ec7-e2ba-4886-b819-34347d570947",
        }}
      />
    </div>
  );
}
