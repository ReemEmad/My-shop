import React, { useState, useEffect, createContext } from "react"
import { Spin } from "antd"
import { LoadingOutlined } from "@ant-design/icons"
import { getCategories } from "../Apis/Category"

export const CategoryContext = createContext()

const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />

export const CategoryProvider = (props) => {
  const [CategoryData, setdata] = useState([])
  const [loading, setloading] = useState(false)
  const [catId, setcatId] = useState("")

  let getData = async () => {
    setloading(true)
    let { data } = await getCategories()
    setloading(false)
    setdata(data)
  }
  useEffect(() => {
    getData()
  }, [])

  return (
    <>
      {loading ? (
        <Spin indicator={antIcon} />
      ) : (
        <CategoryContext.Provider value={{ CategoryData }}>
          {props.children}
        </CategoryContext.Provider>
      )}
    </>
  )
}
