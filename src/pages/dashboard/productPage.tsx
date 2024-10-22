import React, { useEffect, useState } from "react";
import formatter from "../../helper/formatCurrency";
import DashboardLayout from "../../layouts/dashboardLayout";
import { getProducts } from "../../api/productServices";
import { Product } from "../../types/types";

const ProductPage: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchProducts = async (controller: AbortController) => {
    setLoading(true);
    setError(null);
    try {
      const data = await getProducts(controller, "sort=desc");
      setProducts(data);
    } catch (err) {
      setError("Failed to fetch products. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const controller = new AbortController();
    fetchProducts(controller);

    return () => {
      controller.abort();
    };
  }, []);

  return (
    <DashboardLayout>
      <h1>Products</h1>
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "" }}>{error}</p>}
      <div className="flex flex-col">
        <div className="-m-1.5 overflow-x-auto">
          <div className="p-1.5 min-w-full inline-block align-middle">
            <div className="border rounded-lg divide-y divide-gray-200">
              <div className="py-3 px-4">
                <div className="relative max-w-xs">
                  <label className="sr-only">Search</label>
                  <input
                    type="text"
                    name="hs-table-with-pagination-search"
                    id="hs-table-with-pagination-search"
                    className="py-2 px-3 ps-9 block w-full border-gray-200 shadow-sm rounded-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                    placeholder="Search for items"
                  />
                  <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none ps-3">
                    <svg
                      className="size-4 text-gray-400"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <circle cx="11" cy="11" r="8"></circle>
                      <path d="m21 21-4.3-4.3"></path>
                    </svg>
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
                        Price
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase"
                      >
                        Category
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase"
                      >
                        Sell
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
                    {products.map((product) => (
                      <tr>
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
                          {product.name}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                          {formatter.format(product.price)}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                          {product.category}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                          {product._count ? product._count.orderItems : null}
                        </td>

                        <td className="px-6 py-4 space-x-6 flex justify-center whitespace-nowrap text-end text-sm font-medium">
                          <button
                            type="button"
                            className="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 focus:outline-none focus:text-blue-800 disabled:opacity-50 disabled:pointer-events-none"
                          >
                            Update
                          </button>
                          <button
                            type="button"
                            className="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-red-500 hover:text-blue-800 focus:outline-none focus:text-blue-800 disabled:opacity-50 disabled:pointer-events-none"
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="py-1 px-4">
                <nav
                  className="flex items-center space-x-1"
                  aria-label="Pagination"
                >
                  <button
                    type="button"
                    className="p-2.5 min-w-[40px] inline-flex justify-center items-center gap-x-2 text-sm rounded-full text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none"
                    aria-label="Previous"
                  >
                    <span aria-hidden="true">«</span>
                    <span className="sr-only">Previous</span>
                  </button>
                  <button
                    type="button"
                    className="min-w-[40px] flex justify-center items-center text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 py-2.5 text-sm rounded-full disabled:opacity-50 disabled:pointer-events-none"
                    aria-current="page"
                  >
                    1
                  </button>
                  <button
                    type="button"
                    className="min-w-[40px] flex justify-center items-center text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 py-2.5 text-sm rounded-full disabled:opacity-50 disabled:pointer-events-none"
                  >
                    2
                  </button>
                  <button
                    type="button"
                    className="min-w-[40px] flex justify-center items-center text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 py-2.5 text-sm rounded-full disabled:opacity-50 disabled:pointer-events-none"
                  >
                    3
                  </button>
                  <button
                    type="button"
                    className="p-2.5 min-w-[40px] inline-flex justify-center items-center gap-x-2 text-sm rounded-full text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none"
                    aria-label="Next"
                  >
                    <span className="sr-only">Next</span>
                    <span aria-hidden="true">»</span>
                  </button>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default ProductPage