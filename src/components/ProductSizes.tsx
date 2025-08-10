import { ProductVariant } from "@/generated/prisma";

function ProductSizes({ sizes }: { sizes: ProductVariant[] }) {
  return (
    <div className="p-5">
      <h3 className="my-5">Tamanhos e numeração</h3>
      <div className="grid grid-cols-4 gap-1">
        {sizes.map((variantSize) => (
          <div
            key={variantSize.id}
            className={`relative border border-gray-300 text-center py-2 rounded-md ${
              variantSize.stock == 0 ? "bg-disabled" : ""
            }`}
          >
            <p>{variantSize.size}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductSizes;
