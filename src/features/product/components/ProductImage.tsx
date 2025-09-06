import Image from "next/image";
import Link from "next/link";

export function ProductImage({
  imagePath,
  link,
  className,
}: {
  imagePath: string;
  link?: string;
  className?: string;
}) {
  return (
    <div className={`${className} aspect-square relative`}>
      {link ? (
        <Link href={link}>
          <Image className="object-cover" src={imagePath} fill alt="product photo" />
        </Link>
      ) : (
        <Image className="object-cover" src={imagePath} fill alt="product photo" />
      )}
    </div>
  );
}
