// store/useProducts.ts
import { Product } from '@/types/Types'
import { create } from 'zustand'
import productData from '@/data/product-mock.json'

interface Filters {
  category: string
  size: string
  price: number
}

interface ProductsState {
  products: Product[]
  filters: Filters
  loadProducts: () => void
  setFilters: (filters: Partial<Filters>) => void
}
export const useProducts = create<ProductsState>((set) => ({
  products: [],
  filters: { category: "", size: "", price: 0 },
  loadProducts: () => {
    set({ products: productData })
  },
  setFilters: (newFilters) =>
    set((state) => ({ filters: { ...state.filters, ...newFilters } }))
}))