import { Prisma } from "@/generated/prisma/";

export type ProductWithVariantAndImage = {
  productId: number;
  colorId: number;
  price: number;
  discountRate: number;
  starRating: number;
  imagePath: string;
  categoryId: number;
  categoryName: string;
  slug: string;
  name: string;
};

export type ProductFull = Prisma.ProductGetPayload<{
  include: { category: true; variants: true };
}>;

export type ProductVariantWithCategory = Prisma.ProductVariantGetPayload<{
  include: { product: { include: { category: true } } };
}>;
