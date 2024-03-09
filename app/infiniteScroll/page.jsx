import { products } from "@/serverActions/products";

export default async function page() {
  const productData = await products();
  return (
    <div>
      <pre>{JSON.stringify(productData, null, 2)}</pre>
    </div>
  );
}
