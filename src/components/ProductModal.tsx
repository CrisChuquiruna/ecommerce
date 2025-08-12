
import { useCart } from "@/store/useCart";
import { Product } from "@/types/Types";
import Image from "next/image";
import { useEffect, useState } from "react";
import InputNumber from "./inputNumber";

export default function ProductModal({
  product,
  onClose,
}: {
  product: Product;
  onClose: () => void;
}) {
  const { addItem } = useCart();
  const [selectedSize, setSelectedSize] = useState<string>("")
  const [selectedColor, setSelectedColor] = useState<string>("")
  const [selectedQuantity, setSelectedQuantity] = useState<number>(0);


  useEffect(() => {
    if (product.sizes.length > 0) setSelectedSize(product.sizes[0])
    if (product.colors.length > 0) setSelectedColor(product.colors[0])
  }, [product])

  return (
    <section className="fixed top-0 left-0 w-full h-full bg-black/70 flex items-center text-[#465947] justify-center z-10">
      <div
        className="absolute top-0 left-0 w-full h-full"
        onClick={onClose}
      ></div>
      <div className="w-95 md:w-3/4 grid grid-cols-2 md:grid-cols-2 md:place-items-start gap-5 justify-start border-black/70 border-2  bg-[#efeceb] text-[#465947] rounded-md z-10 overflow-hidden shadow shadow-text">
        <Image
          src={product.image}
          alt={product.name}
          width={4480}
          height={6720}
          className="w-50 md:w-90 md:h-120 left-0 object-cover rounded-l-md md:row-span-3"
        />

          <div className="flex flex-col gap-2 pt-5 pr-5">
            <h1 className="text-3xl font-bold-">{product.name}</h1>
            <p className="w-full text-2xl text-start font-bold">
              {product.stock ? `$${product.price}` : "Sin stock"}
            </p>
          </div>

          <section className="flex flex-col gap-2 col-span-2 md:col-span-1 pl-5 md:pl-0">
            <div className="flex flex-row gap-2">
              {product.sizes.map((size, index) => (
                <label
                  key={index}
                  className={`text-lg text-[#465947] cursor-pointer border-2 rounded-md p-2 
                  ${selectedSize === size
                      ? "bg-[#465947] text-[#efeceb] border-[#efeceb]"
                      : ""
                    }`}
                >
                  <input
                    type="radio"
                    name="size"
                    value={size}
                    className="hidden"
                    onChange={() => setSelectedSize(size)}
                  />
                  <span className="text-center font-bold  ">{size}</span>
                </label>
              ))}
            </div>

            <div className="flex flex-row gap-2 col-span-2 md:col-span-1 ">
              {product.colors.map((color, index) => (
                <label
                  key={index}
                  className={`text-lg text-[#465947] cursor-pointer border-2 rounded-md p-2 
                  ${selectedColor === color
                      ? "bg-[#465947] text-[#efeceb] border-[#efeceb]"
                      : ""
                    }`}
                >
                  <input
                    type="radio"
                    name="size"
                    value={color}
                    className="hidden"
                    onChange={() => setSelectedColor(color)}
                  />
                  <span className="text-center font-bold">{color}</span>
                </label>
              ))}
            </div>
          </section>
          <div className="col-span-2 flex gap-5 p-4 md:col-span-1">
            <InputNumber setSelectedQuantity={setSelectedQuantity} />
            <button
              className="mt-2 font-bold bg-[#465947] text-[#efeceb] text-lg px-4 py-1 cursor-pointer rounded hover:bg-text/80 transition-colors active:bg-secondary/90 disabled:opacity-50"
              onClick={() =>
                addItem({
                  productId: product.id,
                  name: product.name,
                  price: product.price,
                  quantity: selectedQuantity,
                  size: selectedSize,
                  color: selectedColor,
                  image: product.image,
                })
              }
            >
              Agregar al carrito
            </button>
        </div>
      </div>
    </section>
  );
}
