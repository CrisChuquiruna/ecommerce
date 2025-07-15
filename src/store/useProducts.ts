// store/useProducts.ts
import { Product } from '@/types/Types'
import { create } from 'zustand'
import productData from '@/data/product-mock.json'

interface ProductsState {
  products: Product[]
  loadProducts: () => void
}

export const useProducts = create<ProductsState>((set) => ({
  products: [],
  loadProducts: () => {
    set({ products: productData })
  }
}))