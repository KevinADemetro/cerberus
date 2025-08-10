"use client";
import { ProductVariant } from "@/generated/prisma";
import { ChangeEvent, useState } from "react";

function ProductSizes({ sizes }: { sizes: ProductVariant[] }) {
  const [selected, setSelected] = useState("option1");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSelected(e.target.value);
  };

  return (
    <div className="p-5">
      <h3 className="my-5">Tamanhos e numeração</h3>
      <div className="grid grid-cols-4 gap-1">
        {sizes.map((variantSize) => (
          <label
            htmlFor={String(variantSize.id)}
            key={variantSize.id}
            className={`relative border ${
              selected === variantSize.size ? "border-gray-600" : "border-gray-300"
            }  text-center py-2 rounded-md ${
              variantSize.stock == 0 ? "bg-disabled" : ""
            }`}
          >
            {variantSize.size}
            <input
              id={String(variantSize.id)}
              type="radio"
              name="size"
              value={variantSize.size}
              className="hidden"
              onChange={handleChange}
            />
          </label>
        ))}
      </div>
    </div>
  );
}

export default ProductSizes;
