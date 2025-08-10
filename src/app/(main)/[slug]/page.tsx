import ProductCard from "@/src/components/ProductCard";
import prisma from "@/src/lib/prisma";
import { notFound } from "next/navigation";
import Image from "next/image";
import productPlaceholder from "@/public/productPlaceholder.jpg";
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
  const color = (await searchParams).cor;

  if (typeof color !== "string") {
    notFound();
  }

  const product = await prisma.product.findUnique({
    include: {
      category: true,
      variants: {
        where: {
          color: {
            equals: color,
            mode: "insensitive",
          },
        },
      },
    },
    where: { slug },
  });

  if (!product) {
    notFound();
  }

  const colorsGrouped = await prisma.productVariant.groupBy({
    by: ["color"],
    where: { productId: product.id },
  });
  const colors: string[] = colorsGrouped.map((item) => item.color);

  return (
    <>
      <div className="px-5">
        <ProductCard product={product} variant="page" />
      </div>
      <div className="aspect-square w-full">
        <Image src={productPlaceholder} alt="" className="object-cover w-full h-full" />
      </div>
      <ProductColors colors={colors} />
      <AddToCartForm product={product} />
      <ProductDescription description={product.description} />
    </>
  );
}

export default page;
