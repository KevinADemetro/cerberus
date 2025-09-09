import { PaymentMethod } from "../payment.types";

export function AcceptedPayments({ methods }: { methods: PaymentMethod[] }) {
  return (
    <div className="flex ">
      {methods.map((method) => (
        <img
          key={method.id}
          src={method.image}
          alt={method.name}
          className="h-6 w-auto object-contain"
        />
      ))}
    </div>
  );
}
