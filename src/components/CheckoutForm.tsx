"use client";

import { useState } from "react";
import PersonalDataForm from "./PersonalDataForm";
import AddressForm from "./AddressForm";

function CheckoutForm() {
  const [showCepField, setShowCepField] = useState(false);
  return (
    <>
      <PersonalDataForm onSubmitSuccess={() => setShowCepField(true)} />
      {showCepField && <AddressForm />}
    </>
  );
}

export default CheckoutForm;
