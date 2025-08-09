import { Prisma } from "@/generated/prisma";
import RatingStars from "../components/RatingStars";
import { getDiscountedPrice } from "@/src/utils/product";
import { formatCurrency } from "@/src/utils/formatter";
import ProductPlaceholder from "@/public/productPlaceholder.jpg";
import Image from "next/image";

function ProductCard({
  product,
}: {
  product: Prisma.ProductGetPayload<{ include: { category: true } }>;
}) {
  const { price, name, category, discountRate, starRating } = product;
  const discountedPrice = getDiscountedPrice(price, discountRate);

  return (
    <div>
      <div className="aspect-square w-full">
        <Image src={ProductPlaceholder} alt="placeholder" className="object-cover" />
      </div>
      <div className="mt-3 font-medium">
        <h2 className="text-sm ">{name}</h2>
        <p className="text-sm my-2 text-gray-600">{category.title}</p>
        <p className="">{formatCurrency(discountedPrice)}</p>
        <p className="flex justify-between flex-wrap mb-3">
          <del className="text-gray-500">{formatCurrency(price)}</del>
          <span className="text-green-900">{discountRate}% off</span>
        </p>
        <RatingStars rating={starRating} />
      </div>
    </div>
  );
}

export default ProductCard;
