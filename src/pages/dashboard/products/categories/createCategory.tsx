import DashboardLayout from "../../../../layouts/dashboardLayout";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  CategorySchema,
  CategorySchemaType,
} from "../../../../types/category.type";
import { postCategory } from "../../../../api/categoryService";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const CreateCategory: React.FC = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CategorySchemaType>({
    resolver: zodResolver(CategorySchema),
  });

  const onSubmit = async (data: CategorySchemaType) => {
    const response = await toast.promise(
      postCategory(data), // Ini adalah Promise yang dilacak
      {
        loading: "Loading...",
        success: (res) => {
          if (res.status === 201) {
            return "Successfully saved category"; // Jika berhasil
          } else {
            throw new Error("Unexpected response status");
          }
        },
        error: (err) => {
          return "Error when submitting category"; // Jika gagal
        },
      }
    );

    if (response?.status === 201) {
      navigate("/dashboard/products/categories");
    }
  };

  return (
    <DashboardLayout>
      {/* <!-- Card Section --> */}

      <div className="">
        <form onSubmit={handleSubmit(onSubmit)}>
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
                    Category name
                  </label>

                  <input
                    id="af-submit-app-product-name"
                    type="text"
                    className={`py-2 px-3 pe-11 block w-full border shadow-sm rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none ${
                      errors.name
                        ? "border-red-500 focus:border-red-500 focus:ring-red-500"
                        : "border-gray-200"
                    }`}
                    placeholder="Enter category name"
                    {...register("name")}
                  />
                  {errors.name && (
                    <p className="text-red-500 text-xs">
                      {errors.name.message}
                    </p>
                  )}
                </div>
              </div>
              {/* <!-- End Grid --> */}

              <div className="mt-5 flex justify-center gap-x-2">
                <button
                  type="submit"
                  className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
                >
                  Submit Category
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

export default CreateCategory;
