import { Product } from "@/generated/prisma";
import RatingStars from "../components/RatingStars";

function ProductCard({ product }: { product: Product }) {
  return (
    <div className="border border-red-500">
      card
      <RatingStars rating={product.starRating} />
    </div>
  );
}

export default ProductCard;
