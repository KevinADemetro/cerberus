import { type Address } from "./address.schema";

export function isAddressEqual(a: Address, b: Address): boolean {
  for (const key of Object.keys(a) as (keyof Address)[]) {
    if (a[key] !== b[key]) {
      return false;
    }
  }
  return true;
}
