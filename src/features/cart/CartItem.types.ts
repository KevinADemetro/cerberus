import { Prisma } from "@/generated/prisma/";

export type CartItemWithProduct = Prisma.CartItemGetPayload<{
  include: { productVariant: { include: { product: true } } };
}>;
