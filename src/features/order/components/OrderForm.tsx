"use client";

import { useState } from "react";
import PersonalDataForm from "../../user/components/PersonalDataForm";
import AddressForm from "../../address/components/AddressForm";

function OrderForm() {
  const [showCepField, setShowCepField] = useState(false);
  return (
    <>
      <PersonalDataForm onSubmitSuccess={() => setShowCepField(true)} />
      {showCepField && <AddressForm />}
    </>
  );
}

export default OrderForm;
