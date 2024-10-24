import React, { useCallback, useEffect, useState } from "react";
import DashboardLayout from "../../../layouts/dashboardLayout";
import { useForm } from "react-hook-form";
import { ProductSchema, ProductSchemaType } from "../../../types/product.type";
import { zodResolver } from "@hookform/resolvers/zod";
import { useDropzone } from "react-dropzone";
import formatter from "../../../helper/formatCurrency";
import { Category } from "../../../interfaces/category.interface";
import { getCategories } from "../../../api/categoryService";

const CreateProduct: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [categories, setCategories] = useState<Category[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const [formattedPrice, setFormattedPrice] = useState("");

  const handlePriceChange = (value: string) => {
    const unformattedValue = value.replace(/[^\d]/g, "");
    setValue("price", Number(unformattedValue));
    setFormattedPrice(formatter(Number(unformattedValue), "decimal"));
  };

  const handleResetImage = () => {
    resetField("image");
    setPreviewImage("");
  };

  const {
    register,
    handleSubmit,
    setValue,
    resetField,
    formState: { errors },
  } = useForm<ProductSchemaType>({
    resolver: zodResolver(ProductSchema),
  });

  const onDrop = useCallback(
    (acceptedFiles: any) => {
      try {
        setLoading(true);
        const file = acceptedFiles[0];
        if (!file || !file.type.startsWith("image/")) {
          setError("Only Images are allowed");
          return;
        }
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function () {
          if (typeof reader.result === "string") {
            setValue("image", reader.result);
            setPreviewImage(reader.result);
            setError(null);
          } else {
            setError("Error uploading image please try again");
            console.log("Error: FileReader result is not a string");
          }
        };
        reader.onerror = function (error) {
          setError("Error uploading image please try again");
          console.log("Error: ", error);
        };
      } finally {
        setLoading(false);
      }
    },
    [setValue]
  );
  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  const fetchCategories = async (controller: AbortController) => {
    setLoading(true);
    setError(null);
    try {
      const response = await getCategories(controller);
      setCategories(response);
    } catch (err) {
      setError("Failed to fetch products. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const controller = new AbortController();
    fetchCategories(controller);

    return () => {
      controller.abort();
    };
  }, []);

  return (
    <DashboardLayout>
      {/* <!-- Card Section --> */}

      <div className="">
        <form>
          {/* <!-- Card --> */}
          <div className="bg-white pt-4 rounded-xl shadow">
            <div className="p-6 sm:pt-0 sm:p-7">
              {/* <!-- Grid --> */}
              <div className="space-y-4 sm:space-y-6">
                <div className="space-y-2">
                  <label
                    htmlFor="af-submit-app-product-name"
                    className="inline-block text-sm font-medium text-gray-800 mt-2.5"
                  >
                    Product name
                  </label>

                  <input
                    id="af-submit-app-product-name"
                    type="text"
                    className="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                    placeholder="Enter product name"
                    {...register("name")}
                  />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="af-submit-product-price"
                    className="inline-block text-sm font-medium text-gray-800 mt-2.5"
                  >
                    Product price
                  </label>

                  <input
                    id="af-submit-product-price"
                    type="text"
                    className="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                    placeholder="1000"
                    value={formattedPrice}
                    onChange={(e) => handlePriceChange(e.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between">
                    <label
                      htmlFor="af-submit-app-upload-images"
                      className="inline-block text-sm font-medium text-gray-800 mt-2.5"
                    >
                      Preview image
                      {error && (
                        <span className="ml-2 text-xs text-red-500">
                          {error}
                        </span>
                      )}
                    </label>
                    {previewImage && (
                      <p
                        className="py-2 px-3 inline-flex items-center gap-x-2 text-xs font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none cursor-pointer"
                        onClick={() => handleResetImage()}
                      >
                        Reset Image
                      </p>
                    )}
                  </div>

                  <label
                    {...getRootProps()}
                    htmlFor="af-submit-app-upload-images"
                    className="group p-4 sm:p-7 block cursor-pointer text-center border-2 border-dashed border-gray-200 rounded-lg focus-within:outline-none focus-within:ring-2 focus-within:ring-blue-500 focus-within:ring-offset-2"
                  >
                    {previewImage ? (
                      <div className="flex justify-center items-center">
                        <img
                          src={previewImage}
                          alt="Preview"
                          className="w-[300px] h-[300px] object-contain"
                        />
                      </div>
                    ) : (
                      <>
                        <input
                          // id="af-submit-app-upload-images"
                          type="file"
                          accept=".jpg, .jpeg, .png"
                          max={1}
                          name="af-submit-app-upload-images"
                          placeholder="muhaha"
                          className="sr-only"
                          {...getInputProps()}
                        />
                        <svg
                          className="size-10 mx-auto text-gray-400"
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          viewBox="0 0 16 16"
                        >
                          <path
                            fillRule="evenodd"
                            d="M7.646 5.146a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1-.708.708L8.5 6.707V10.5a.5.5 0 0 1-1 0V6.707L6.354 7.854a.5.5 0 1 1-.708-.708l2-2z"
                          />
                          <path d="M4.406 3.342A5.53 5.53 0 0 1 8 2c2.69 0 4.923 2 5.166 4.579C14.758 6.804 16 8.137 16 9.773 16 11.569 14.502 13 12.687 13H3.781C1.708 13 0 11.366 0 9.318c0-1.763 1.266-3.223 2.942-3.593.143-.863.698-1.723 1.464-2.383zm.653.757c-.757.653-1.153 1.44-1.153 2.056v.448l-.445.049C2.064 6.805 1 7.952 1 9.318 1 10.785 2.23 12 3.781 12h8.906C13.98 12 15 10.988 15 9.773c0-1.216-1.02-2.228-2.313-2.228h-.5v-.5C12.188 4.825 10.328 3 8 3a4.53 4.53 0 0 0-2.941 1.1z" />
                        </svg>
                        <span className="mt-2 block text-sm text-gray-800">
                          Browse your device or{" "}
                          <span className="group-hover:text-blue-700 text-blue-600">
                            drag 'n drop'
                          </span>
                        </span>
                        <span className="mt-1 block text-xs text-gray-500">
                          Maximum file size is 2 MB
                        </span>
                      </>
                    )}
                  </label>
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="af-submit-app-category"
                    className="inline-block text-sm font-medium text-gray-800 mt-2.5"
                  >
                    Category
                  </label>

                  <select
                    id="af-submit-app-category"
                    className="py-2 px-3 pe-9 block w-full border-gray-200 shadow-sm rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                  >
                    <option defaultChecked>Select a category</option>
                    {categories.map((category) => (
                      <option key={category.id} value={category.id}>
                        {category.name.charAt(0).toUpperCase() +
                          category.name.slice(1)}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="af-submit-app-description"
                    className="inline-block text-sm font-medium text-gray-800 mt-2.5"
                  >
                    Description
                  </label>

                  <textarea
                    id="af-submit-app-description"
                    className="py-2 px-3 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                    rows={6}
                    placeholder="A detailed summary will better explain your products to the audiences. Our users will see this in your dedicated product page."
                  ></textarea>
                </div>
              </div>
              {/* <!-- End Grid --> */}

              <div className="mt-5 flex justify-center gap-x-2">
                <button
                  type="button"
                  className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
                >
                  Submit your project
                </button>
              </div>
            </div>
          </div>
          {/* <!-- End Card --> */}
        </form>
      </div>
      {/* <!-- End Card Section --> */}
    </DashboardLayout>
  );
};

export default CreateProduct;
