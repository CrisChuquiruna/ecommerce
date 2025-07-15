import { useCart } from "@/store/useCart";
import { Product } from "@/types/Types";
import Image from "next/image";
import { useState } from "react";



export default function ProductModal({product, onClose}: {product: Product, onClose: () => void}) {
    const { addItem } = useCart()
    const [selectedSize, setSelectedSize] = useState<string>('')
    const [selectedColor, setSelectedColor] = useState<string>('')
    console.log(product)
  return (
    <section className="absolute top-0 left-0 w-full h-full bg-black/70 flex items-center justify-center">
      <div className="absolute top-0 left-0 w-full h-full" onClick={onClose}></div>
      <div className="w-2/4 flex flex-row gap-5 items-center justify-center border-text border-3  bg-[#efeceb] text-[#465947]  rounded-md z-10 overflow-hidden shadow shadow-text">
        <Image src={product.image} alt={product.name} width={4480} height={6720} className="w-90 h-120 object-cover rounded-l-md"/>
        
        <div className="w-2/4 flex flex-col gap-5 items-center justify-center  ">
          <h1 className="text-3xl font-bold-">{product.name}</h1>

          <p className="text-xl font-bold">${product.price}</p>

          <div className="flex flex-row gap-2">
            {product.sizes.map((size, index) => (
              <label key={index} className={`text-lg text-[#465947] cursor-pointer border-2 rounded-md p-2 
                ${selectedSize === size ? 'bg-[#465947] text-[#efeceb] border-[#efeceb]' : ''}`}>
                <input type="radio" name="size" value={size} className="hidden" onChange={() => setSelectedSize(size)}/>
                <span className="text-center font-bold  ">{size}</span> 
              </label>
            ))}
          </div>

          <div className="flex flex-row gap-2">
            {product.colors.map((color, index) => (
              <label key={index} className={`text-lg text-[#465947] cursor-pointer border-2 rounded-md p-2 
                ${selectedColor === color ? 'bg-[#465947] text-[#efeceb] border-[#efeceb]' : ''}`}>
                <input type="radio" name="size" value={color} className="hidden" onChange={() => setSelectedColor(color)}/>
                <span className="text-center font-bold">{color}</span> 
              </label>
            ))}
          </div>
          
          <button className="mt-2 font-bold bg-[#465947] text-[#efeceb] text-lg px-4 py-1 cursor-pointer rounded hover:bg-[#465947]/80 transition-colors active:bg-secondary/90 disabled:opacity-50"
            onClick={ () => 
              addItem({
                productId: product.id,
                name: product.name,
                price: product.price,
                quantity: 1,
                size: product.sizes[0],
                color: product.colors[0],
                image: product.image
              })
          }>Agregar al carrito</button>
        </div>
      </div>
    </section>
  )
}
