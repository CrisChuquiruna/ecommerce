
import { useEffect, useState } from "react"

const InputNumber = ({setSelectedQuantity, newQuantity}: {setSelectedQuantity: (quantity:number) => void, newQuantity:number}) => {
  const [quantity, setQuantity] = useState(newQuantity || 1)

  const increment = () => setQuantity((prev) => prev + 1)
  const decrement = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1))
  useEffect(() => {
    setSelectedQuantity(quantity)
  },[quantity])
  return (
    <div className="flex items-center h-10  ">
      <div className="border  border-gray-400 rounded">
        <button
          onClick={decrement}
          className="px-2 py-2 text-text hover:bg-text/10 transition-colors active:bg-text/20"
        >
          –
        </button>
        <span className="px-4 py-2 text-center select-none">{quantity}</span>
        <button
          onClick={increment}
          className="px-2 py-2 text-text hover:bg-text/10 transition-colors active:bg-text/20"
        >
          +
        </button>
      </div>
    </div>
  )
}

export default InputNumber;
