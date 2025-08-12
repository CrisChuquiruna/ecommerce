'use client'
import { useCart } from "@/store/useCart"
import Image from "next/image"
// TODO Animacion en el carrito al agregar un producto y que el boton de agregar al carrito se desactive si no hay stock y tenga animacion si se agrega un producto
// TODO Hacer que la modal se cierre al agregar un producto (con una animacion chida)

export default function CartPage() {
    const { items, removeItem, clearCart, totalPrice } = useCart()
  return (
    <main className="w-full flex flex-col items-center justify-center">
      <h1 className="text-text font-bold text-5xl w-full md:w-2/3 mb-8 px-2 md:px-0">CARRITO</h1>
      <section className="flex flex-row justify-start items-start w-full md:w-2/3 px-4 md:px-0 gap-15">
        <div className="w-full lg:w-2/3 flex flex-col justify-start items-start">
          <h1 className="text-text font-bold text-2xl">Productos</h1>
          { items.map(item => (
            <div key={item.productId} className="w-full lg:w-5/6 border-b border-gray-200 shadow-md my-4 bg-background-500 border-md">
              <div className="flex w-full ">
                <Image src={item.image} alt={item.name} width={90} height={0} className="object-cover " />
                <div className="text-text self-start p-3">
                  <h3 className="text-lg font-semibold">{item.name}</h3>
                  <p className="text-sm text-gray-600 mt-3">Tamaño: {item.size}, Color: {item.color}</p>
                  <p className="text-md font-bold">${item.price} x {item.quantity}</p>
                </div>
                <button onClick={() => removeItem(item.productId, item.size, item.color)} className="text-accent hover:text-red-700 ml-auto mr-8">Eliminar</button>
              </div>
            </div>
          ))}
        </div>
        <section className="w-full fixed left-0 bottom-0 md:w-1/3 md:sticky md:top-0 self-start mt-10">
          <div className="self-center  w-full flex flex-col items-start shadow-md p-5  min-h-40 gap-2 bg-background-500 rounded-md">
            <h1 className="text-[#374638] font-bold text-sm mb-5">Resumen de compra</h1>
            <h2 className="text-[#374638] text-xs">{`Producto ${'$ ' + totalPrice() }` }</h2>
            <h2 className="text-[#374638] text-xs">Envio $ 1200</h2>
            <h2 className="text-[#374638] text-ls font-bold absolute bottom-4">{`Total ${'$ ' + (totalPrice() + 1200) }` }</h2>
          </div>
        </section>
      </section>
    </main>
  )
}