import { formatCurrency } from "@/src/utils/formatter";
import { DeliveryOption as DeliveryOptionType } from "../shipping.types";

export function DeliveryOption({
  deliveryOption,
}: {
  deliveryOption: DeliveryOptionType;
}) {
  return (
    <dl className="mt-5">
      <li
        key={deliveryOption.id}
        className="flex flex-col text-sm bg-gray-50 rounded-md py-2 px-5 mb-2"
      >
        <dt>{deliveryOption.companyName}:</dt>
        <dd>
          {deliveryOption.deliveryTime} dias úteis ({formatCurrency(deliveryOption.price)}
          )
        </dd>
      </li>
    </dl>
  );
}
