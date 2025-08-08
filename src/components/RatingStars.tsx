import StarEmpty from "@/src/icons/star-empty.svg";
import StarFull from "@/src/icons/star-full.svg";
import StarHalf from "@/src/icons/star-half.svg";
import Image from "next/image";
import { formatOneDecimal } from "../utils/formatter";

function RatingStars({ rating }: { rating: number }) {
  const stars = [];

  for (let i = 0; i < 5; i++) {
    const diff = rating - i;

    if (diff >= 1) {
      stars.push(<Image src={StarFull} alt="" key={i} className="h-4 w-4" />);
    } else if (diff >= 0.4) {
      stars.push(<Image src={StarHalf} alt="" key={i} className="h-4 w-4" />);
    } else {
      stars.push(<Image src={StarEmpty} alt="" key={i} className="h-4 w-4" />);
    }
  }

  return (
    <div className="flex items-center justify-between">
      <div className="flex gap-1">{stars}</div>
      <span className="border border-gray-400 px-1 text-sm text-gray-600">
        {formatOneDecimal(rating)}
      </span>
    </div>
  );
}

export default RatingStars;
