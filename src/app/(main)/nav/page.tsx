import ProductsList from "@/src/components/ProductsList";
import { getProductsVariantsWithImage } from "@/src/utils/productVariant";

async function Page() {
  const products = await getProductsVariantsWithImage(null);
  return (
    <div>
      <ProductsList products={products} />
    </div>
  );
}

export default Page;
