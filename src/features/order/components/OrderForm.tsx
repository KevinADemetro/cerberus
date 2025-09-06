"use client";

import { useState } from "react";
import { PersonalDataForm } from "@/src/features/user";
import { AddressForm } from "@/src/features/address";

export function OrderForm() {
  const [showCepField, setShowCepField] = useState(false);
  return (
    <>
      <PersonalDataForm onSubmitSuccess={() => setShowCepField(true)} />
      {showCepField && <AddressForm />}
    </>
  );
}
