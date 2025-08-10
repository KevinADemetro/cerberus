import ProductCard from "@/src/components/ProductCard";
import prisma from "@/src/lib/prisma";
import { notFound } from "next/navigation";
import Image from "next/image";
import productPlaceholder from "@/public/productPlaceholder.jpg";
import ProductColors from "@/src/components/ProductColors";
import ProductSizes from "@/src/components/ProductSizes";
import StickyButton from "@/src/components/StickyButton";
import { StickyBottom } from "@/src/components/StickyBottom";

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
      <ProductSizes sizes={product.variants} />

      <StickyBottom>
        <div className="mx-5 grid grid-cols-1">
          <button className="text-white bg-black py-5 rounded-full">
            Adicionar ao carrinho
          </button>
        </div>
      </StickyBottom>
      <ProductColors colors={colors} />
      <ProductColors colors={colors} />
      <ProductColors colors={colors} />
      <ProductColors colors={colors} />
    </>
  );
}

export default page;
