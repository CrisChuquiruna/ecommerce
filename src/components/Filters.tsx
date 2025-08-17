'use client'
import { useProducts } from '@/store/useProducts'

export default function Filters() {
  const { filters, setFilters } = useProducts()

  return (
    <div className="p-4 w-full md:w-1/4 border-black/70 border-1 shadow-lg rounded-lg text-text ">
      <h2 className="font-semibold mb-2">Filtros</h2>

      {/* Categoría */}
      <label className="block mb-1 ">Categoría</label>
      <select
        value={filters.category}
        onChange={(e) => setFilters({ category: e.target.value })}
        className="w-full border rounded p-2 mb-4 focus:bg-background focus:border-accent"
      >
        <option value="">Todas</option>
        <option value="remeras">Remeras</option>
        <option value="buzos">Buzos</option>
        <option value="pantalones">Pantalones</option>
        <option value="camperas">Camperas</option>
        <option value="shorts">Shorts</option>
      </select>

      {/* Talle */}
      <label className="block mb-1  ">Talle</label>
      <select
        value={filters.size}
        onChange={(e) => setFilters({ size: e.target.value })}
        className="w-full border rounded p-2 mb-4 focus:bg-background focus:border-accent"
      >
        <option value="">Todos</option>
        <option value="S">S</option>
        <option value="M">M</option>
        <option value="L">L</option>
        <option value="XL">XL</option>
      </select>

      {/* Precio */}
      <label className="block mb-1 ">Precio máximo</label>
      <input
        type="number"
        value={filters.price}
        onChange={(e) => setFilters({ price: Number(e.target.value) })}
        className="w-full border rounded p-2"
      />
    </div>
  )
}
