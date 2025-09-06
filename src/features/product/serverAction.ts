"use server";
import prisma from "@/src/lib/prisma";
import { Prisma } from "@/generated/prisma";
import { ProductWithVariantAndImage } from "@/src/features/product/product.types";
import { ProductVariantFilters } from "@/src/features/product/product.schemas";

export async function getImageByColorIdAndProductId(colorId: number, productId: number) {
  const image = await prisma.productColorImage.findFirstOrThrow({
    where: { colorId, productId },
  });
  return image;
}

export async function getProductVariantBy(id: number) {
  const variant = await prisma.productVariant.findUnique({
    where: { id },
    include: { product: { include: { category: true } } },
  });
  return variant;
}

export async function getProductsVariantsWithImage(filter: ProductVariantFilters | null) {
  const values: any[] = [];
  const whereClauses: string[] = [];
  if (filter) {
    if (filter.cor) {
      values.push(filter.cor);
      whereClauses.push(`color."name" ILIKE $${values.length}`);
    }

    if (filter.categoria) {
      values.push(filter.categoria);
      whereClauses.push(`c.title ILIKE $${values.length}`);
    }

    if (filter.tamanho) {
      values.push(filter.tamanho);
      whereClauses.push(`pv.size ILIKE $${values.length}`);
    }

    if (filter.productName) {
      values.push(`%${filter.productName}%`);
      whereClauses.push(`p.name ILIKE $${values.length}`);
    }
  }

  const where = whereClauses.length > 0 ? `WHERE ${whereClauses.join(" AND ")}` : "";

  const products = await prisma.$queryRawUnsafe<ProductWithVariantAndImage[]>(
    `
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
  JOIN "Color" color ON color.id = pv."colorId"
  LEFT JOIN "ProductColorImage" pci
    ON pci."productId" = pv."productId"
    AND pci."colorId" = pv."colorId"
  ${where}
  GROUP BY pv."productId", pv."colorId", c.id, c.title, p.slug, p.price, p."discountRate", p."starRating"
  ORDER BY pv."productId"`,
    ...values
  );

  return products;
}

export async function getProductBy(slug: string, colorId: number) {
  const product = await prisma.product.findUnique({
    include: {
      category: true,
      variants: {
        where: {
          color: {
            id: colorId,
          },
        },
        orderBy: { id: "desc" },
      },
      productColorImages: { where: { colorId } },
    },
    where: { slug },
  });
  return product;
}
