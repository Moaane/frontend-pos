import React, { useEffect, useState } from "react";
import DashboardLayout from "../../../../layouts/dashboardLayout";
import Pagination from "../../../../components/pagination";
import { PaginationMeta } from "../../../../interfaces/pagination.interface";
import { Category } from "../../../../interfaces/category.interface";
import {
  deleteCategory,
  getCategoriesWithPagination,
} from "../../../../api/categoryService";
import { Copy, Download, FileText, Plus, Printer, Search } from "lucide-react";
import toast from "react-hot-toast";
import EmptyTable from "../../../../components/emptyTable";
import { useNavigate } from "react-router-dom";

const MenuProduct: React.FC = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState<string>("");
  const [sort, setSort] = useState<"" | "product">("");
  const [order, setOrder] = useState<"asc" | "desc">("desc");
  const [pagination, setPagination] = useState<PaginationMeta>({
    total: 1,
    lastPage: 1,
    currentPage: 1,
    perPage: 10,
    prev: null,
    next: null,
  });
  const navigate = useNavigate();

  const fetchCategories = async (
    controller: AbortController,
    search: string = "",
    pagination: PaginationMeta
  ) => {
    try {
      console.log(search);

      const response = await getCategoriesWithPagination(
        controller,
        `search=${search}&sort=${sort}&order=${order}&page=${pagination.currentPage}&perPage=${pagination.perPage}`
      );

      setCategories(response.data);
      setPagination(response.meta);
    } catch (err: any) {
      console.log(err);
      if (err.message !== "canceled") {
        toast.error("Error while getting categories");
      }
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    await toast.promise(
      deleteCategory(id), // Ini adalah Promise yang dilacak
      {
        loading: "Loading...",
        success: (res) => {
          if (res.status === 200) {
            const controller = new AbortController();
            fetchCategories(controller, search, pagination);
            return "Successfully deleted category"; // Jika berhasil
          } else {
            throw new Error("Unexpected error occurred");
          }
        },
        error: (err) => {
          return "Error when deleting category"; // Jika gagal
        },
      }
    );
  };

  const handlePageChange = (page: number) => {
    setPagination((prev) => ({ ...prev, currentPage: page }));
  };

  useEffect(() => {
    const controller = new AbortController();
    fetchCategories(controller, search, pagination);

    return () => {
      controller.abort();
    };
  }, [pagination.currentPage, sort, order]);

  useEffect(() => {
    const controller = new AbortController();
    const delayDebounceFn = setTimeout(() => {
      fetchCategories(controller, search, pagination);
    }, 500);

    return () => {
      clearTimeout(delayDebounceFn);
      controller.abort();
    };
  }, [search]);

  return (
    <DashboardLayout>
      {pagination.total === 0 ? (
        <EmptyTable
          title="Product Categories"
          description="Add Categories, edit and more."
          link="/dashboard/products/categories/new"
        />
      ) : (
        <div className="flex flex-col">
          <div className="-m-1.5 overflow-x-auto">
            <div className="p-1.5 min-w-full inline-block align-middle">
              <div className="border rounded-lg divide-y divide-gray-200">
                <div className="px-6 py-4 grid gap-3 md:flex md:justify-between md:items-center border-b border-gray-200">
                  <div>
                    <h2 className="text-xl font-semibold text-gray-800">
                      Product Categories
                    </h2>
                    <p className="text-sm text-gray-600">
                      Add Categories, edit and more.
                    </p>
                  </div>

                  <a
                    className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
                    href="/dashboard/products/categories/new"
                  >
                    <Plus className="shrink-0 size-4" />
                    Add Category
                  </a>
                </div>
                <div className="px-6 py-4 grid gap-3 md:flex md:justify-between md:items-center border-b border-gray-200 dark:border-neutral-700">
                  {/* <!-- Input --> */}
                  <div className="sm:col-span-1">
                    <label
                      htmlFor="hs-as-table-product-review-search"
                      className="sr-only"
                    >
                      Search
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        id="hs-as-table-product-review-search"
                        name="hs-as-table-product-review-search"
                        className="py-2 px-3 ps-11 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                        placeholder="Search"
                        onChange={(e) => setSearch(e.target.value)}
                      />
                      <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none ps-4">
                        <Search className="shrink-0 size-4 text-gray-400" />
                      </div>
                    </div>
                  </div>
                  {/* <!-- End Input --> */}

                  <div className="sm:col-span-2 md:grow">
                    <div className="flex justify-end gap-x-2">
                      <div className="hs-dropdown [--placement:bottom-right] relative inline-block">
                        <button
                          id="hs-as-table-table-export-dropdown"
                          type="button"
                          className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none"
                          aria-haspopup="menu"
                          aria-expanded="false"
                          aria-label="Dropdown"
                        >
                          <Download className="shrink-0 size-3.5" />
                          Export
                        </button>
                        <div
                          className="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden divide-y divide-gray-200 min-w-48 z-10 bg-white shadow-md rounded-lg p-2 mt-2"
                          role="menu"
                          aria-orientation="vertical"
                          aria-labelledby="hs-as-table-table-export-dropdown"
                        >
                          <div className="py-2 first:pt-0 last:pb-0">
                            <span className="block py-2 px-3 text-xs font-medium uppercase text-gray-400">
                              Options
                            </span>
                            <a
                              className="flex items-center gap-x-3 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100"
                              href="#"
                            >
                              <Copy className="shrink-0 size-4" />
                              Copy
                            </a>
                            <a
                              className="flex items-center gap-x-3 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100"
                              href="#"
                            >
                              <Printer className="shrink-0 size-4" />
                              Print
                            </a>
                          </div>
                          <div className="py-2 first:pt-0 last:pb-0">
                            <span className="block py-2 px-3 text-xs font-medium uppercase text-gray-400">
                              Download options
                            </span>
                            <a
                              className="flex items-center gap-x-3 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100"
                              href="#"
                            >
                              <FileText className="shrink-0 size-4" />
                              Excel
                            </a>
                            <a
                              className="flex items-center gap-x-3 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100"
                              href="#"
                            >
                              <FileText className="shrink-0 size-4" />
                              .CSV
                            </a>
                            <a
                              className="flex items-center gap-x-3 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100"
                              href="#"
                            >
                              <FileText className="shrink-0 size-4" />
                              .PDF
                            </a>
                          </div>
                        </div>
                      </div>
                      <select
                        onChange={(e) => {
                          const value = e.target.value as "" | "product";
                          setSort(value);
                        }}
                        className="max-w-40 py-2 px-3 pe-9 block w-full border-gray-200 rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none text-sm font-medium"
                      >
                        <option defaultChecked value="">
                          Sort
                        </option>
                        <option value="product">By Product</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="overflow-hidden">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th scope="col" className="py-3 px-4 pe-0">
                          <div className="flex items-center h-5">
                            <input
                              id="hs-table-pagination-checkbox-all"
                              type="checkbox"
                              className="border-gray-200 rounded text-blue-600 focus:ring-blue-500"
                            />
                            <label
                              htmlFor="hs-table-pagination-checkbox-all"
                              className="sr-only"
                            >
                              Checkbox
                            </label>
                          </div>
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase"
                        >
                          Name
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase"
                        >
                          Products
                        </th>
                        <th
                          scope="col"
                          className="col-span-2 flex justify-center px-6 py-3 text-end text-xs font-medium text-gray-500 uppercase"
                        >
                          Action
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {categories.map((category) => (
                        <tr key={category.id}>
                          <td className="py-3 ps-4">
                            <div className="flex items-center h-5">
                              <input
                                id="hs-table-pagination-checkbox-1"
                                type="checkbox"
                                className="border-gray-200 rounded text-blue-600 focus:ring-blue-500"
                              />
                              <label
                                htmlFor="hs-table-pagination-checkbox-1"
                                className="sr-only"
                              >
                                Checkbox
                              </label>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">
                            {category.name.charAt(0).toUpperCase() +
                              category.name.slice(1)}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                            {category._count?.products}
                          </td>

                          <td className="px-6 py-4 space-x-6 flex justify-center whitespace-nowrap text-end text-sm font-medium">
                            <button
                              type="button"
                              className="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 focus:outline-none focus:text-blue-800 disabled:opacity-50 disabled:pointer-events-none"
                              onClick={() =>
                                navigate(
                                  `/dashboard/products/categories/update/id/${category.id}`
                                )
                              }
                            >
                              Update
                            </button>
                            <button
                              type="button"
                              className="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-red-500 hover:text-blue-800 focus:outline-none focus:text-blue-800 disabled:opacity-50 disabled:pointer-events-none"
                              onClick={() => handleDelete(category.id)}
                            >
                              Delete
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <Pagination
                  pagination={pagination}
                  onPageChange={handlePageChange}
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </DashboardLayout>
  );
};

export default MenuProduct;
