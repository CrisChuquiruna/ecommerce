'use client'
import { useProducts } from '@/store/useProducts'
import { useEffect } from 'react'
import ProductCard from './ProductCard'

export default function ProductList() {
  const { products, loadProducts } = useProducts()

  useEffect(() => {
    loadProducts()
  }, [loadProducts])

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-2/3">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}/>
      ))}
    </div>
  )
}