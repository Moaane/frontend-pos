import axios from "axios";
import api from "./api";
import { Category } from "../interfaces/category.interface";

export const getCategories = async (
  controller: AbortController
): Promise<Category[]> => {
  try {
    const response = await api.get(`/categories`, {
      signal: controller.signal,
    });

    return response.data.data;
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
