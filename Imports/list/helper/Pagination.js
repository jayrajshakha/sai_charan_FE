import React from "react";

const Pagination = ({ HandlerClick, totalPages, page }) => {
  return (
    <div className="mt-3 flex items-center justify-center">
      <nav aria-label="Page navigation example">
        <ul className="inline-flex -space-x-px text-base h-10">
          {[...Array(totalPages)].map((_, index) => {
            return (
              <li key={index}>
                <a
                  onClick={() => HandlerClick(index + 1)}
                  className={` cursor-pointer flex items-center justify-center px-4 h-10   ${
                    index + 1 === page && "text-blue-600"
                  } border border-gray-300 ${
                    index + 1 === page && "bg-blue-50"
                  } hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white`}
                >
                  {index + 1}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};

export default Pagination;
