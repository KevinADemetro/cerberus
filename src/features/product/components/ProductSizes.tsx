"use client";
import { ProductVariant } from "@/generated/prisma";

export function ProductSizes({
  sizes,
  setShowSizeError,
  setSelected,
  selected,
}: {
  sizes: ProductVariant[];
  setShowSizeError: (value: boolean) => void;
  setSelected: (value: number) => void;
  selected: number;
}) {
  const handleClick = (id: number) => {
    setSelected(id);
    setShowSizeError(false);
  };

  return (
    <div className="p-5">
      <h3>Tamanhos e numeração</h3>
      <div className="grid grid-cols-4 gap-1">
        {sizes.map((variantSize) => (
          <label
            htmlFor={String(variantSize.id)}
            key={variantSize.id}
            className={`relative border ${
              selected === variantSize.id ? "border-gray-600" : "border-gray-300"
            }  text-center py-2 rounded-md ${
              variantSize.stock == 0 ? "bg-disabled" : ""
            }`}
          >
            {variantSize.size}
            <input
              id={String(variantSize.id)}
              type="radio"
              name="variantId"
              value={variantSize.id}
              className="hidden"
              onClick={() => handleClick(variantSize.id)}
            />
          </label>
        ))}
      </div>
    </div>
  );
}
