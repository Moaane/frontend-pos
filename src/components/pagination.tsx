import React from "react";
import { PaginationMeta } from "../interfaces/pagination.interface";

interface PaginationProps {
  pagination: PaginationMeta;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  pagination,
  onPageChange,
}) => {
  const { currentPage, lastPage, prev, next } = pagination;

  const startIndex = (pagination.currentPage - 1) * pagination.perPage + 1; // Indeks awal
  const endIndex = Math.min(
    pagination.currentPage * pagination.perPage,
    pagination.total
  );

  const getPaginationArray = () => {
    const pages = [];
    if (lastPage <= 5) {
      // If there are 5 or fewer pages, show all
      for (let i = 1; i <= lastPage; i++) {
        pages.push(i);
      }
    } else {
      // Add first page
      pages.push(1);

      // Add ellipsis if needed
      if (currentPage > 3) {
        pages.push("...");
      }

      // Add current page and surrounding pages
      const startPage = Math.max(2, currentPage - 1);
      const endPage = Math.min(lastPage - 1, currentPage + 1);
      for (let i = startPage; i <= endPage; i++) {
        pages.push(i);
      }

      // Add ellipsis if needed
      if (currentPage < lastPage - 2) {
        pages.push("...");
      }

      // Add last page
      pages.push(lastPage);
    }
    return pages;
  };

  return (
    <div className="py-1 px-4 flex justify-between">
      <div className="px-6 py-4 grid gap-3 md:flex md:justify-between md:items-center border-t border-gray-200">
        <div>
          <p className="text-sm text-gray-600">
            <span className="font-semibold text-gray-800">
              {startIndex} - {endIndex}
              {" "}
            </span>
            results from {pagination.total}
          </p>
        </div>
      </div>
      <nav className="flex items-center space-x-1" aria-label="Pagination">
        <button
          type="button"
          onClick={() => pagination.prev && onPageChange(pagination.prev)}
          disabled={!pagination.prev}
          className="p-2.5 min-w-[40px] inline-flex justify-center items-center gap-x-2 text-sm rounded-full text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none"
          aria-label="Previous"
        >
          <span aria-hidden="true">«</span>
          <span className="sr-only">Previous</span>
        </button>

        {/* Render pagination buttons */}
        {getPaginationArray().map((page, index) => {
          if (page === "...") {
            return (
              <span key={index} className="flex items-center">
                ...
              </span>
            );
          }
          return (
            <button
              key={page}
              type="button"
              onClick={() => onPageChange(page as number)}
              className={`min-w-[40px] flex justify-center items-center text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 py-2.5 text-sm rounded-full ${
                currentPage === page ? "bg-gray-200" : ""
              } disabled:opacity-50 disabled:pointer-events-none`}
              disabled={currentPage === page}
              aria-current={currentPage === page ? "page" : undefined}
            >
              {page}
            </button>
          );
        })}

        <button
          type="button"
          onClick={() => pagination.next && onPageChange(pagination.next)}
          disabled={!pagination.next}
          className="p-2.5 min-w-[40px] inline-flex justify-center items-center gap-x-2 text-sm rounded-full text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none"
          aria-label="Next"
        >
          <span className="sr-only">Next</span>
          <span aria-hidden="true">»</span>
        </button>
      </nav>
    </div>
  );
};

export default Pagination;
