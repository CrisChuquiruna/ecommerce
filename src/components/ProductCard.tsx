import { Product } from "@/types/Types";
import Image from "next/image";
import { useState } from "react";
import ProductModal from "./ProductModal";

export default function ProductCard({product}: {product: Product}) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div key={product.id} className="w-5/6 border-black/70 border-1 rounded-md text-text  shadow shadow-text p-2 flex flex-col items-start justify-between gap-2 ">
      <a href="" className='w-full flex flex-col gap-2 items-start justify-center cursor-pointer'>
        <div className='flex w-full justify-center h-50 overflow-hidden rounded-md'>
          <Image src={product.image} alt={product.name} width={4480} height={6720} className="w-40 object-cover transition duration-300 ease-in-out hover:scale-140" />
        </div>
        <h2 className="font-bold text-text text-md mt-2">{product.name}</h2>
        <p className='text-xl'>{product.stock ? `$${product.price}` : "Sin stock"}</p>
      </a>
      <button
        className="mt-2 bg-secondary text-[#efeceb] text-md font-bold px-4 py-1 cursor-pointer rounded hover:bg-secondary/80 transition-colors active:bg-secondary/90 disabled:opacity-50"
        onClick={() => setIsModalOpen(true)}
      >
        Comprar
      </button>
      {isModalOpen && (
        <ProductModal
          product={product}
          onClose={() => setIsModalOpen(false)}
        />
      )}     
    </div>   
  )
}
