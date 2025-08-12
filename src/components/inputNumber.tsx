
import { useEffect, useState } from "react"

const InputNumber = ({setSelectedQuantity}: {setSelectedQuantity: (quantity:number) => void}) => {
  const [quantity, setQuantity] = useState(1)

  const increment = () => setQuantity((prev) => prev + 1)
  const decrement = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1))
  useEffect(() => {
    setSelectedQuantity(quantity)
  },[quantity])
  return (
    <div className="flex items-center border border-gray-400 rounded w-fit">
      <button
        onClick={decrement}
        className="px-3 py-1 text-gray-600 hover:bg-gray-100"
      >
        –
      </button>
      <span className="px-4 py-1 text-center select-none">{quantity}</span>
      <button
        onClick={increment}
        className="px-3 py-1 text-gray-600 hover:bg-gray-100"
      >
        +
      </button>
    </div>
  )
}

export default InputNumber;
