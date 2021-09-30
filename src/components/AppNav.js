import React from "react"
import { useEffect, useContext } from "react"
import { PageHeader } from "antd"
import { ProductContext } from "../Contexts/ProductContext"

export default function AppNav() {
  return (
    <>
      <PageHeader
        className="site-page-header"
        title="My Shop"
        subTitle="Welcome!"
      />
      <div style={{ zIndex: 1000000000 }}>
        <h1> My shop</h1>
        <h1>Choose a category</h1>
      </div>
    </>
  )
}
