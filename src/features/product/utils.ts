import {
  productVariantFiltersSchema,
  ProductVariantFilters,
} from "@/src/features/product";

export function parseProductVariantFilters(
  raw: Record<string, string>
): ProductVariantFilters {
  const parsed = productVariantFiltersSchema.safeParse(raw);

  if (!parsed.success) {
    throw new Error("Filtros inválidos");
  }

  return parsed.data;
}
