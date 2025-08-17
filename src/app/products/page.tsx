import Filters from "@/components/Filters";
import ProductList from "@/components/ProductList";

export default async function Page() {
  return <main className="w-full px-5 md:px-10 flex flex-col justify-center gap-15">
    <h1 className="text-text font-bold text-3xl w-2/3 md:text-5xl">PRODUCTOS</h1>
    <div className="w-full flex flex-col md:flex-row items-center md:items-start justify-start gap-10">
      <Filters /> 
      <ProductList />
    </div>
  </main>
}