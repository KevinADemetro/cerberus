import {
  convertProductFullToProductWithVariantAndImage,
  getProductBy,
  ProductCard,
  ProductColors,
  ProductDescription,
} from "@/src/features/product/";
import prisma from "@/src/lib/prisma";
import { notFound } from "next/navigation";
import Image from "next/image";
import { AddToCartForm } from "@/src/features/cart/";

async function page({
  params,
  searchParams,
}: {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const { slug } = await params;
  const colorId = Number((await searchParams).cor);

  if (isNaN(colorId)) {
    notFound();
  }

  const product = await getProductBy(slug, colorId);
  if (product === null) {
    notFound();
  }
  const productWithVariantAndImage =
    convertProductFullToProductWithVariantAndImage(product);
  if (!product) {
    notFound();
  }

  const colorsImagesGrouped = await prisma.productColorImage.findMany({
    distinct: ["colorId"],
    where: { productId: product.id },
  });

  return (
    <>
      <div className="px-5">
        <ProductCard product={productWithVariantAndImage} variant="page" />
      </div>
      <div className="relative aspect-square w-full">
        <Image
          src={product.productColorImages[0].imagePath}
          alt=""
          fill
          className="object-cover w-full h-full"
        />
      </div>
      <ProductColors colorImages={colorsImagesGrouped} />
      <AddToCartForm product={product} />
      <ProductDescription description={product.description} />
    </>
  );
}

export default page;
