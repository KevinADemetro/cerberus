import RatingStars from "../components/RatingStars";
import { getDiscountedPrice } from "@/src/utils/product";
import { formatCurrency } from "@/src/utils/formatter";
import Image from "next/image";
import { ProductWithVariantAndImage } from "@/src/utils/productVariant.types";

function ProductCard({
  product,
  variant = "list",
}: {
  product: ProductWithVariantAndImage;
  variant?: string;
}) {
  const { price, name, categoryName, discountRate, starRating, imagePath } = product;
  const discountedPrice = getDiscountedPrice(price, discountRate);
  const isList = variant === "list";

  return (
    <div>
      {isList && (
        <div className="relative aspect-square w-full">
          <Image src={imagePath} alt={`image-${name}`} fill className="object-cover" />
        </div>
      )}

      <div className="mt-3 font-medium">
        <h2 className={`${isList ? "text-sm" : "text-2xl"}`}>{name}</h2>
        <p className={`${isList ? "text-sm text-gray-600" : ""} my-2`}>{categoryName}</p>
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
