import axios from "axios";
import api from "./api";
import { PaginatedResult } from "../interfaces/pagination.interface";
import { Product } from "../interfaces/product.interface";

export const getProducts = async (
  controller: AbortController,
  query?: string
): Promise<PaginatedResult<Product[]>> => {
  try {
    const response = await api.get(`/products?${query}`, {
      signal: controller.signal,
    });
    return {
      data: response.data.data,
      meta: response.data.meta,
    }; // Mengambil data produk dari response
  } catch (error) {
    // Tangani pembatalan permintaan dengan mengabaikan CanceledError
    if (axios.isCancel(error)) {
      console.log("Request was cancelled");
      return {
        data: [],
        meta: {
          total: 0,
          lastPage: 0,
          currentPage: 0,
          perPage: 0,
          prev: null,
          next: null,
        },
      };
    } else if (error instanceof Error) {
      console.error("An error occurred:", error.message);
      throw error; // Melempar error lain
    } else {
      console.error("An unknown error occurred");
      throw new Error("An unknown error occurred");
    }
  }
};