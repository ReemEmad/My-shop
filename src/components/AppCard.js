import React from "react"
import { Card, Divider, Rate } from "antd"

export default function AppCard({ name, image, price, currency, rating }) {
  const { Meta } = Card
  return (
    <div style={{ width: "300", height: "270" }}>
      <Card
        hoverable
        style={{ width: 340, height: "fit-content" }}
        cover={<img height="200" alt="example" src={image} />}
      >
        <Meta title={name} description={<Rate disabled value={rating} />} />
        <br />
        <Meta
          description={
            <strong>
              {currency} {price}
            </strong>
          }
        />
      </Card>
    </div>
  )
}
