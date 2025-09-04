import { productVariantFiltersSchema, ProductVariantFilters } from "./product.schemas";

export function parseProductVariantFilters(
  raw: Record<string, string>
): ProductVariantFilters {
  const parsed = productVariantFiltersSchema.safeParse(raw);

  if (!parsed.success) {
    throw new Error("Filtros inválidos");
  }

  return parsed.data;
}
