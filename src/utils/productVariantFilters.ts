import {
  productVariantFiltersSchema,
  ProductVariantFilters,
} from "./productVariantFilters.schema";

export function parseProductVariantFilters(
  raw: Record<string, string>
): ProductVariantFilters {
  const parsed = productVariantFiltersSchema.safeParse(raw);

  if (!parsed.success) {
    throw new Error("Filtros inválidos");
  }

  return parsed.data;
}
