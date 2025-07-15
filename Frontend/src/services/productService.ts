import axios from "axios"
import type { Product } from "../types/product"
const API_URL = "https://fakestoreapi.com/products"

export const getAllProducts = async (): Promise<Product[]> => {
    const response = await axios.get<Product[]>(API_URL)
    return response.data
}