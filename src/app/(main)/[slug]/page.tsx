import ProductCard from "@/src/components/ProductCard";
import prisma from "@/src/lib/prisma";
import { notFound } from "next/navigation";

async function page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  const product = await prisma.product.findUnique({
    include: { category: true },
    where: { slug },
  });

  if (!product) {
    notFound();
  }

  return (
    <div className="px-5">
      <ProductCard product={product} variant="page" />
      {slug}
    </div>
  );
}

export default page;
