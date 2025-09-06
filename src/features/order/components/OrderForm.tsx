"use client";

import { useState } from "react";
import { PersonalDataForm } from "@/src/features/user/components/PersonalDataForm";
import { AddressForm } from "@/src/features/address/components/AddressForm";

export function OrderForm() {
  const [showCepField, setShowCepField] = useState(false);
  return (
    <>
      <PersonalDataForm onSubmitSuccess={() => setShowCepField(true)} />
      {showCepField && <AddressForm />}
    </>
  );
}
