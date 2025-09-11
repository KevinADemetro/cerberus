import { formatCurrency } from "@/src/utils/formatter";
import { DeliveryOption } from "../shipping.types";

export function DeliveryOptions({
  deliveryOptions,
}: {
  deliveryOptions: DeliveryOption[];
}) {
  return (
    <dl className="mt-5">
      {deliveryOptions?.map((deliveryOption) => (
        <li
          key={deliveryOption.id}
          className="flex flex-col text-sm bg-gray-50 rounded-md py-2 px-5 mb-2"
        >
          <dt>{deliveryOption.companyName}:</dt>
          <dd>
            {deliveryOption.deliveryTime} dias úteis (
            {formatCurrency(deliveryOption.price)})
          </dd>
        </li>
      ))}
    </dl>
  );
}
