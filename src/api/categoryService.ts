import axios from "axios";
import api from "./api";
import { Category } from "../interfaces/category.interface";
import { PaginatedResult } from "../interfaces/pagination.interface";
import {
  CategorySchemaType,
  UpdateCategorySchemaType,
} from "../types/category.type";
import { ResultInterface } from "../interfaces/result.interface";

export const getCategories = async (
  controller: AbortController
): Promise<Category[]> => {
  try {
    const response = await api.get(`/categories`, {
      signal: controller.signal,
      validateStatus: function (status) {
        return status < 500;
      },
    });
    return response.data.data;
  } catch (error: any) {
    throw error.toJSON();
  }
};

export const  getCategoriesWithPagination = async (
  controller: AbortController,
  query?: string
): Promise<PaginatedResult<Category[]>> => {
  try {
    const response = await api.get(`/categories?${query}`, {
      signal: controller.signal,
      validateStatus: function (status) {
        return status < 500;
      },
    });
    return {
      data: response.data.data,
      meta: response.data.meta,
    };
  } catch (error: any) {
    if (!error.axios.isCancel(error)) {
      console.error(error);
    }
    throw error.toJSON();
  }
};

export const findCategory = async (
  controller: AbortController,
  id: string
): Promise<ResultInterface<Category>> => {
  try {
    const response = await api.get(`/categories/${id}`, {
      signal: controller.signal,
      validateStatus: function (status) {
        return status < 500;
      },
    });
    return response.data;
  } catch (error: any) {
    if (!axios.isCancel(error)) {
      console.error(error);
    }

    return {
      status: "error", // Anda bisa mengubah ini menjadi "fail" jika lebih cocok
      statusCode: error.response ? error.response.status : 500, // Status error
      message: error.message || "An error occurred", // Pesan error
      // Data null karena terjadi error
    };
  }
};

export const postCategory = async (data: CategorySchemaType) => {
  try {
    const response = await api.post(`/categories`, data, {
      validateStatus: function (status) {
        return status < 500;
      },
    });
    return response;
  } catch (error: any) {
    throw error.toJSON();
  }
};

export const updateCategory = async (data: UpdateCategorySchemaType) => {
  try {
    const response = await api.patch(`/categories`, data, {
      validateStatus: function (status) {
        return status < 500;
      },
    });
    return response;
  } catch (error: any) {
    throw error.toJSON();
  }
};

export const deleteCategory = async (id: string) => {
  try {
    const response = await api.delete(`/categories/${id}`, {
      validateStatus: function (status) {
        return status < 500;
      },
    });
    return response;
  } catch (error: any) {
    throw error.toJSON();
  }
};
