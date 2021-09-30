import { Axios } from "."
import qs from "qs"

export const getProducts = async () => {
  let result = await Axios.get("/product")

  return result
}

export let filterProducts = (min, max, color, rating) => {
  let result = Axios.get("/product", {
    params: {
      min,
      max,
      color,
      rating,
    },
    paramsSerializer: (params) => {
      return qs.stringify(params, { arrayFormat: "repeat" })
    },
  })
  return result
}
