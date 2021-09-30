import React, { useContext, useState } from "react"
import Carousel from "react-multi-carousel"
import { filterProducts } from "../Apis/Category"
import { CategoryContext } from "../Contexts/CategoryContext"
import { ProductContext } from "../Contexts/ProductContext"

export default function AppSlider() {
  let { setFilteredData, setloading } = useContext(ProductContext)
  let { categoryData } = useContext(CategoryContext)

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 2000, min: 1024 },
      items: 5,
      partialVisibilityGutter: 40,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      partialVisibilityGutter: 40,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  }

  let filterdata = async (id) => {
    setloading(true)
    let { data } = await filterProducts(id)
    setloading(false)
    setFilteredData(data)
  }

  return (
    <Carousel
      responsive={responsive}
      className="carousel-container"
      infinite
      centerMode={true}
    >
      {categoryData.map((item) => (
        <div className="img-hover-zoom" onClick={() => filterdata(item.id)}>
          <h1>{item.name}</h1>
          <img src={item.image} alt="category" width="85%"></img>
          <div className="shadow"></div>
        </div>
      ))}
    </Carousel>
  )
}
