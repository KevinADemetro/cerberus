import { PaymentMethod } from "../payment.types";

export function AcceptedPayments({ methods }: { methods: PaymentMethod[] }) {
  return (
    <div className="flex flex-wrap gap-4 px-8 pt-50 pb-30 justify-around">
      {methods.map((method) => (
        <img
          key={method.id}
          src={method.image}
          title={method.name}
          alt={method.name}
          className="h-5 w-auto object-contain"
        />
      ))}
    </div>
  );
}
