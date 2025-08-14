import { ProductColorImage } from "@/generated/prisma";
import Link from "next/link";
import Image from "next/image";
function ProductColors({ colorImages }: { colorImages: ProductColorImage[] }) {
  return (
    <div>
      <h3 className="ml-5 my-5">Cores</h3>
      <div className="flex mx-1 gap-1 overflow-x-scroll">
        {colorImages.map((colorImage: ProductColorImage) => (
          <Link
            href={`?cor=${colorImage.colorId}`}
            key={colorImage.id}
            className="relative aspect-square border h-28 rounded-md"
          >
            <Image className="p-1" src={colorImage.imagePath} fill alt="" />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default ProductColors;
