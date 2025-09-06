import { ProductVariantFilters, productVariantFiltersSchema } from "./product.schemas";
import { ProductFull } from "./product.types";

export function parseProductVariantFilters(
  raw: Record<string, string>
): ProductVariantFilters {
  const parsed = productVariantFiltersSchema.safeParse(raw);

  if (!parsed.success) {
    throw new Error("Filtros inválidos");
  }

  return parsed.data;
}

export function convertProductFullToProductWithVariantAndImage(product: ProductFull) {
  return {
    productId: product.id,
    colorId: product.productColorImages[0].colorId,
    price: product.price,
    discountRate: product.discountRate,
    starRating: product.starRating,
    imagePath: product.productColorImages[0].imagePath,
    categoryId: product.category.id,
    categoryName: product.category.title,
    slug: product.slug,
    name: product.name,
  };
}
