import Image from "next/image";
import Link from "next/link";

function ProductImage({ imagePath, link }: { imagePath: string; link: string }) {
  return (
    <div className="my-5 aspect-square relative">
      <Link href={link}>
        <Image className="object-cover" src={imagePath} fill alt="product photo" />
      </Link>
    </div>
  );
}

export default ProductImage;
