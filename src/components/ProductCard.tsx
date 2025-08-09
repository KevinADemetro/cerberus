import { Prisma } from "@/generated/prisma";
import RatingStars from "../components/RatingStars";
import { getDiscountedPrice } from "@/src/utils/product";
import { formatCurrency } from "@/src/utils/formatter";
import ProductPlaceholder from "@/public/productPlaceholder.jpg";
import Image from "next/image";

function ProductCard({
  product,
  variant = "list",
}: {
  product: Prisma.ProductGetPayload<{ include: { category: true } }>;
  variant?: string;
}) {
  const { price, name, category, discountRate, starRating } = product;
  const discountedPrice = getDiscountedPrice(price, discountRate);
  const isList = variant === "list";

  return (
    <div>
      {isList && (
        <div className="aspect-square w-full">
          <Image src={ProductPlaceholder} alt="placeholder" className="object-cover" />
        </div>
      )}

      <div className="mt-3 font-medium">
        <h2 className={`${isList ? "text-sm" : "text-2xl"}`}>{name}</h2>
        <p className={`${isList ? "text-sm text-gray-600" : ""} my-2`}>
          {category.title}
        </p>
        <div className={`${isList ? "" : "text-lg"} flex justify-between flex-wrap`}>
          <p className="">{formatCurrency(discountedPrice)}</p>
          <del className="text-gray-500">{formatCurrency(price)}</del>
          <span className="text-green-900">{discountRate}% off</span>
        </div>
        <div className={`${isList ? "w-full" : "w-2/3"} my-3`}>
          <RatingStars rating={starRating} />
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
