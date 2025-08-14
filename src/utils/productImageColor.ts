"use server";
import prisma from "../lib/prisma";

export async function getImageByColorIdAndProductId(colorId: number, productId: number) {
  const image = await prisma.productColorImage.findFirstOrThrow({
    where: { colorId, productId },
  });
  return image;
}
