import ProductList from "@/components/ProductList";
import Image from "next/image";

export default async function Page() {
  return <main className="w-full flex flex-col items-center justify-center gap-10">
    <Image
      src="/assets/images/main/Banner.png"
      alt="Home Image"
      width={800}
      height={400}
      className="rounded-lg w-full md:w-2/3 "
    />
    <h1 className="text-text font-bold text-2xl w-2/3 md:text-4xl ml-[40px]">Nuevos Productos</h1>
    <ProductList cantAMostrar={2} />

  </main>
}