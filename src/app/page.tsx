import Navbar from "@/components/Navbar";
import ProductList from "@/components/ProductList";

export default async function Page() {
  return <main className="flex flex-col items-center justify-center gap-10">
    <Navbar />  
    <ProductList />
  </main>
}