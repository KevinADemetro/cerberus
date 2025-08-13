/*
  Warnings:

  - A unique constraint covering the columns `[productVariantId,cartId]` on the table `CartItem` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "CartItem_productVariantId_cartId_key" ON "public"."CartItem"("productVariantId", "cartId");
