import React from "react";
import { CloseModel, WarnIcon } from "../assets";

const DeletBox = ({ HandlerDelet }) => {
  return (
    <div
      onClick={() => HandlerDelet("Cancel")}
      className="w-full flex items-center justify-center h-full fixed right-0 top-0 z-50 bg-[#00000094]"
    >
      <div className="relative flex justify-center items-center w-[90%] max-w-80 bg-white rounded-lg shadow dark:bg-gray-700">
        <button
          onClick={() => HandlerDelet("Cancel")}
          type="button"
          className="absolute top-3 end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
        >
          <CloseModel />
          <span className="sr-only">Close modal</span>
        </button>
        <div className="p-4 md:p-5 text-center">
          <WarnIcon />
          <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
            Are you sure you want to delete this User ?
          </h3>
          <button
            onClick={() => HandlerDelet("Delete")}
            type="button"
            className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center"
          >
            Yes, I'm sure
          </button>
          <button
            onClick={() => HandlerDelet("Cancel")}
            type="button"
            className="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
          >
            No, cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeletBox;
