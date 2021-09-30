import React, { useContext, useState, useEffect } from "react"
import { Space, Slider, Checkbox, Rate, Divider, Button } from "antd"
import { ProductContext } from "../Contexts/ProductContext"
import { filterProducts } from "../Apis/Product"

export default function AppFilters() {
  const [options, setoptions] = useState([])
  const [checked, setchecked] = useState([])
  const [colorsFiltered, setColorsFiltered] = useState([])
  const [prodRate, setprodRate] = useState()
  const { uniquecolors, minPrice, maxPrice, setfiltereddata } =
    useContext(ProductContext)

  const ratings = [5, 4, 3, 2, 1]

  useEffect(() => {
    if (uniquecolors.length > 0) {
      const newarr = uniquecolors.map((item) => ({ label: item, value: item }))
      setoptions(newarr)
    }
  }, [uniquecolors])

  let onChange = async (checkedValues) => {
    setColorsFiltered(checkedValues)
  }

  let confirmBtn = async () => {
    let result = await filterProducts(
      checked[0],
      checked[1],
      colorsFiltered,
      prodRate,
    )
    setfiltereddata(result.data)
  }

  return (
    <Space direction="vertical" className="filters-container">
      <Divider />
      <div className="slider-filter">
        <h1>Price Range</h1>
        <Slider
          onAfterChange={(value) => setchecked(value)}
          range
          min={minPrice}
          max={maxPrice}
          included={true}
        />
      </div>
      <div>
        <h1>Color</h1>
        <Checkbox.Group
          options={options}
          defaultValue={["black"]}
          onChange={onChange}
        />
      </div>
      <div>
        <h1>Average rating</h1>
        {ratings.map((item) => (
          <span onClick={() => setprodRate(item)} className="rating-btn">
            <Rate disabled defaultValue={item} key={item} /> & Up
          </span>
        ))}
      </div>
      <Button
        type="primary"
        size="large"
        className="btn-primary"
        onClick={confirmBtn}
      >
        Confirm
      </Button>
    </Space>
  )
}
