// store/useCart.ts
import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { CartItem } from '@/types/Types'

interface CartState {
  items: CartItem[]
  addItem: (item: CartItem) => void
  removeItem: (productId: string, size: string, color: string) => void
  clearCart: () => void
  totalPrice: () => number
}

export const useCart = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],
      addItem: (newItem) => {
        const items = get().items
        const existingIndex = items.findIndex(
          (item) =>
            item.productId === newItem.productId &&
            item.size === newItem.size &&
            item.color === newItem.color
        )

        if (existingIndex !== -1) {
          const updatedItems = [...items]
          updatedItems[existingIndex].quantity += newItem.quantity
          set({ items: updatedItems })
        } else {
          set({ items: [...items, newItem] })
        }
      },
      removeItem: (productId, size, color) => {
        const items = get().items.filter(
          (item) =>
            item.productId !== productId ||
            item.size !== size ||
            item.color !== color
        )
        set({ items })
      },
      clearCart: () => set({ items: [] }),
      totalPrice: () =>
        get().items.reduce((sum, item) => sum + item.price * item.quantity, 0)
    }),
    {
      name: 'cart-storage', // clave del localStorage
      getStorage: () => localStorage
    }
  )
)
