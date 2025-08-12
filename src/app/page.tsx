import ProductList from "@/components/ProductList";

export default async function Page() {
  return <main className="w-full flex flex-col items-center justify-center gap-10">
    <h1 className="text-text font-bold text-3xl w-2/3 md:text-5xl">PRODUCTOS</h1>
    <ProductList />
  </main>
}