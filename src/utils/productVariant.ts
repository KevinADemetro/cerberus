"use server";
import prisma from "../lib/prisma";
import { ProductWithVariantAndImage } from "./productVariant.types";

export async function getProductVariantBy(id: number) {
  const variant = await prisma.productVariant.findUnique({
    where: { id },
    include: { product: { include: { category: true } } },
  });
  return variant;
}

export async function getProductsVariantsWithImage() {
  const products = await prisma.$queryRaw<ProductWithVariantAndImage[]>`
  SELECT
    p.slug AS "slug",
    p.price,
    p."discountRate",
    p."starRating",
    pv."productId",
    pv."colorId",
    c.id AS "categoryId",
    MIN(pci."imagePath") AS "imagePath",
    c.title AS "categoryTitle"
  FROM "ProductVariant" pv
  JOIN "Product" p ON p.id = pv."productId"
  JOIN "Category" c ON c.id = p."categoryId"
  LEFT JOIN "ProductColorImage" pci
    ON pci."productId" = pv."productId"
    AND pci."colorId" = pv."colorId"
  GROUP BY pv."productId", pv."colorId", c.id, c.title, p.slug, p.price, p."discountRate", p."starRating"
  ORDER BY pv."productId"
`;

  return products;
}
