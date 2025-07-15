export interface Product {
  id: string
  name: string
  description: string
  price: number
  category: string
  stock: number
  sizes: string[]
  colors: string[]
  image: string
  isNew: boolean
}

export interface CartItem {
  productId: string
  name: string
  price: number
  quantity: number
  size: string
  color: string
  image: string
}