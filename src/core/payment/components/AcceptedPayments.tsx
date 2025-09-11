import { PaymentMethod } from "../payment.types";

export function AcceptedPayments({ methods }: { methods: PaymentMethod[] }) {
  return (
    <div className="flex flex-wrap gap-4 px-5 pt-50 pb-30 justify-evenly">
      {methods.map((method) => (
        <img
          key={method.id}
          src={method.image}
          title={method.name}
          alt={method.name}
          className="h-8 w-auto object-contain"
        />
      ))}
    </div>
  );
}
