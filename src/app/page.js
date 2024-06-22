import { fetchAllProducts } from "@/actions";

export default async function Home() {
  const getAllProducts = await fetchAllProducts();

  console.log(getAllProducts);
  return (
    <div>
      <h1>Shopping Cart</h1>
    </div>
  );
}
