import Link from "next/link";
function ProductColors({ colors }: { colors: string[] }) {
  return (
    <div>
      <h3 className="ml-5 my-5">Cores</h3>
      <div className="flex mx-1 gap-1">
        {/*TODO mudar pela foto do produto pela cor*/}
        {colors.map((color) => (
          <Link
            href={`?cor=${color}`}
            key={color}
            className="h-[123px] w-[123px] border border-black rounded-md"
          >
            {color}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default ProductColors;
