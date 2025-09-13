"use server";
import prisma from "@/src/lib/prisma";
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
    p.price AS "price",
    p."discount_rate" AS "discountRate",
    p."star_rating" AS "starRating",
    pv."product_id" AS "productId",
    pv."color_id" AS "colorId",
    c.id AS "categoryId",
    MIN(pci."image_path") AS "imagePath",
    c.title AS "categoryTitle"
  FROM "product_variant" pv
  JOIN "product" p 
    ON p.id = pv."product_id"
  JOIN "category" c 
    ON c.id = p."category_id"
  JOIN "color" color 
    ON color.id = pv."color_id"
  LEFT JOIN "product_color_image" pci
    ON pci."product_id" = pv."product_id"
    AND pci."color_id" = pv."color_id"
  ${where}
  GROUP BY 
    pv."product_id", 
    pv."color_id", 
    c.id, 
    c.title, 
    p.slug, 
    p.price, 
    p."discount_rate", 
    p."star_rating"
  ORDER BY pv."product_id"`,
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

export async function getColorBy(colorId: number) {
  const color = await prisma.color.findFirstOrThrow({
    where: { id: colorId },
  });
  return color;
}
