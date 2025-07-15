import { Product } from "@/types/Types";
import Image from "next/image";
import { useState } from "react";
import ProductModal from "./ProductModal";

export default function ProductCard({product}: {product: Product}) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div key={product.id} className="border-text border-2 rounded-md shadow shadow-text p-4 flex flex-col items-start gap-2 ">
          <a href="" className='w-full flex flex-col gap-2 items-start cursor-pointer'>
            <div className='w-full h-90 overflow-hidden rounded-md'>
              <Image src={product.image} alt={product.name} width={4480} height={6720} className="w-full h-90 object-cover transition duration-300 ease-in-out hover:scale-140" />
            </div>
            <h2 className="font-bold opacity-80 text-lg mt-2">{product.name}</h2>
            <p className='text-2xl'>${product.price}</p>
          </a>
          <button
            className="mt-2 bg-secondary text-text text-lg font-bold px-4 py-1 cursor-pointer rounded hover:bg-secondary/80 transition-colors active:bg-secondary/90 disabled:opacity-50"
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
