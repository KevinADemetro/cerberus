"use server";
import prisma from "../lib/prisma";

export async function getProductVariantBy(id: number) {
  const variant = await prisma.productVariant.findUnique({
    where: { id },
    include: { product: { include: { category: true } } },
  });
  return variant;
}
