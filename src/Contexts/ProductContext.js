import React, { useState, useEffect, createContext } from "react"
import { getProducts } from "../Apis/Product"
import { Spin } from "antd"
import { LoadingOutlined } from "@ant-design/icons"

export const ProductContext = createContext()

const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />

export const ProductProvider = (props) => {
  const [data, setdata] = useState([])
  const [filteredData, setfiltereddata] = useState([])
  const [loading, setloading] = useState(false)
  const [minPrice, setMinPrice] = useState(0)
  const [maxPrice, setMaxPrice] = useState(0)
  const [uniquecolors, setuniquecolors] = useState([])
  const [colors, setcolors] = useState([])

  let getData = async () => {
    setloading(true)
    let { data } = await getProducts()
    setloading(false)
    setdata(data)
    setfiltereddata(data)
  }

  let getColors = () => {
    setloading(true)
    let mycolors = []
    data.forEach((element) => {
      mycolors = [...mycolors, element.color]
    })
    setuniquecolors([...new Set(mycolors)])
    setloading(false)
  }

  let getPrices = () => {
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
          setdata,
          uniquecolors,
          minPrice,
          maxPrice,
          filteredData,
          setfiltereddata,
        }}
      >
        {props.children}
      </ProductContext.Provider>
    </Spin>
  )
}
