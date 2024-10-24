import { FileText, Plus } from "lucide-react";
import React from "react";

interface EmptyTableProps {
  title: string;
  description: string;
  link: string;
}

const EmptyTable: React.FC<EmptyTableProps> = ({
  title,
  description,
  link,
}) => {
  return (
    // <!-- Table Section -->
    <div>
      {/* <!-- Card --> */}
      <div className="flex flex-col">
        <div className="-m-1.5 overflow-x-auto">
          <div className="p-1.5 min-w-full inline-block align-middle">
            <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
              {/* <!-- Header --> */}
              <div className="px-6 py-4 border-b border-gray-200">
                <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
                <p className="text-sm text-gray-600">{description}</p>
              </div>
              {/* <!-- End Header --> */}

              {/* <!-- Body --> */}
              <div className="max-w-sm w-full min-h-[400px] flex flex-col justify-center mx-auto px-6 py-4">
                <div className="flex justify-center items-center size-[46px] bg-gray-100 rounded-lg">
                  <FileText className="shrink-0 size-6 text-gray-600" />
                </div>

                <h2 className="mt-5 font-semibold text-gray-800">
                  No draft <span className="lowercase">{title}</span>
                </h2>

                <div className="mt-5 flex">
                  <a href={link}>
                    <button
                      type="button"
                      className="w-full py-2 px-3 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
                    >
                      <Plus className="shrink-0 size-4" />
                      <span className="flex gap-x-1">
                        Create a new<span className="lowercase">{title}</span>
                      </span>
                    </button>
                  </a>
                </div>
              </div>
              {/* <!-- End Body --> */}

              {/* <!-- Footer --> */}
              <div className="px-6 py-4 grid gap-3 md:flex md:justify-between md:items-center border-t border-gray-200">
                <div>
                  <p className="text-sm text-gray-600">
                    <span className="font-semibold text-gray-800">0</span>{" "}
                    results
                  </p>
                </div>
              </div>
              {/* <!-- End Footer --> */}
            </div>
          </div>
        </div>
      </div>
      {/* <!-- End Card --> */}
    </div>
    // <!-- End Table Section -->
  );
};

export default EmptyTable;
