import React, { useContext } from "react"
import AppCard from "./components/AppCard"
import { ProductContext } from "./Contexts/ProductContext"

export default function Products() {
  const { filteredData } = useContext(ProductContext)

  return (
    <div className="products-grid">
      {filteredData.map((item) => (
        <AppCard
          className="products-grid__cards"
          name={item.name}
          image={item.image}
          price={item.price}
          currency={item.currency}
          rating={item.rating}
        />
      ))}
    </div>
  )
}
