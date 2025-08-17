'use client'
import { useProducts } from '@/store/useProducts'
import { useEffect } from 'react'
import ProductCard from './ProductCard'

export default function ProductList({ cantAMostrar = 0 }: { cantAMostrar?: number }) {
  const { products, loadProducts, filters } = useProducts()

  useEffect(() => {
    loadProducts()
  }, [loadProducts])

  // Aplicamos los filtros globales
  const filteredProducts = products.filter((product) => {
    const matchCategory = filters.category ? product.category === filters.category : true
    const matchSize = filters.size ? product.sizes.includes(filters.size) : true
    const matchPrice = filters.price > 0 ? product.price <= filters.price : true
    return matchCategory && matchSize && matchPrice
  })

  return (
    <div className="grid grid-cols-1 items-stretch mb-10 md:grid-cols-2 lg:grid-cols-3 gap-6 w-2/3 place-items-center">
      {filteredProducts
        .slice(0, cantAMostrar === 0 ? filteredProducts.length : cantAMostrar)
        .map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
    </div>
  )
}
