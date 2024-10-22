import axios from "axios";
import { Product } from "../types/types";
import api from "./api";

const getProducts = async (
  controller: AbortController,
  query?: string
): Promise<Product[]> => {
  try {
    const response = await api.get<{ data: Product[] }>(`/products?${query}`, {
      signal: controller.signal,
    });

    return response.data.data; // Mengambil data produk dari response
  } catch (error) {
    // Tangani pembatalan permintaan dengan mengabaikan CanceledError
    if (axios.isCancel(error)) {
      console.log("Request was cancelled");
      return [];
    } else if (error instanceof Error) {
      console.error("An error occurred:", error.message);
      throw error; // Melempar error lain
    } else {
      console.error("An unknown error occurred");
      throw new Error("An unknown error occurred");
    }
  }
};

export { getProducts };
