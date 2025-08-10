"use server";
import prisma from "../lib/prisma";

export async function getProductVariantBy(id: number) {
  const variant = await prisma.productVariant.findUnique({ where: { id } });
  return variant;
}
