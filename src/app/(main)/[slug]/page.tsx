import ProductCard from "@/src/components/ProductCard";
import prisma from "@/src/lib/prisma";
import { notFound } from "next/navigation";
import Image from "next/image";
import ProductColors from "@/src/components/ProductColors";
import ProductDescription from "@/src/components/ProductDescription";
import AddToCartForm from "@/src/components/AddToCartForm";

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
        <ProductCard product={product} variant="page" />
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
