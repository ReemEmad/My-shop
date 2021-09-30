import { Axios } from "."

export let getCategories = async () => {
  let result = await Axios.get("/category")

  return result
}

export let filterProducts = async (categoryId) => {
  let result = await Axios.get(`/product?categoryId=${categoryId}`)
  return result
}
