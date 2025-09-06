import { RatingStars } from "@/src/components/RatingStars";
import { formatCurrency, formatPercent } from "@/src/utils/formatter";
import { getDiscountedPrice } from "@/src/core/pricing/utils";
import { ProductWithVariantAndImage } from "@/src/features/product/product.types";
import { ProductImage } from "@/src/features/product/components/ProductImage";

export function ProductCard({
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
      {isList && <ProductImage imagePath={imagePath} />}

      <div className="mt-3 font-medium">
        <h2 className={`${isList ? "text-sm" : "text-2xl"}`}>{name}</h2>
        <p className={`${isList ? "text-sm text-gray-600" : ""} my-2`}>{categoryName}</p>
        <div className={`${isList ? "" : "text-lg"} flex justify-between flex-wrap`}>
          <p className="">{formatCurrency(discountedPrice)}</p>
          <del className="text-gray-500">{formatCurrency(price)}</del>
          <span className="text-green-900">{formatPercent(discountRate)} off</span>
        </div>
        <div className={`${isList ? "w-full" : "w-2/3"} my-3`}>
          <RatingStars rating={starRating} />
        </div>
      </div>
    </div>
  );
}
