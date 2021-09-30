import React, { useState, useEffect, createContext } from "react"
import { getProducts } from "../Apis/Product"
import { Spin } from "antd"
import { LoadingOutlined } from "@ant-design/icons"

export const ProductContext = createContext()

const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />

export const ProductProvider = (props) => {
  const [data, setData] = useState([])
  const [filteredData, setFilteredData] = useState([])
  const [loading, setloading] = useState(false)
  const [minPrice, setMinPrice] = useState(0)
  const [maxPrice, setMaxPrice] = useState(0)
  const [uniquecolors, setUniqueColors] = useState([])

  const getData = async () => {
    setloading(true)
    let { data } = await getProducts()
    setloading(false)
    setData(data)
    setFilteredData(data)
  }

  const getColors = () => {
    setloading(true)
    let mycolors = []
    data.forEach((element) => {
      mycolors = [...mycolors, element.color]
    })
    setUniqueColors([...new Set(mycolors)])
    setloading(false)
  }

  const getPrices = () => {
    setloading(true)
    let prices = []
    data.forEach((element) => {
      prices = [...prices, element.price]
    })
    setMinPrice(Math.min(...prices))
    setMaxPrice(Math.max(...prices))
    setloading(false)
  }

  useEffect(() => {
    getData()
  }, [])

  useEffect(() => {
    getColors()
    getPrices()
  }, [data])

  return (
    <Spin
      indicator={antIcon}
      spinning={loading}
      className="spinner"
      size="large"
    >
      <ProductContext.Provider
        value={{
          data,
          setData,
          uniquecolors,
          minPrice,
          maxPrice,
          filteredData,
          setFilteredData,
          setloading,
        }}
      >
        {props.children}
      </ProductContext.Provider>
    </Spin>
  )
}
