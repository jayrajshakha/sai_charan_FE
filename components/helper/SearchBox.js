import React from "react";

const SearchBox = ({ search, setSearch, handleKeypress, handlerSearch }) => {
  return (
    <div className="flex flex-column flex-wrap space-y-4 sm:space-y-0 items-center justify-between pb-4">
      <label htmlFor="table-search" className="sr-only">
        Search
      </label>

      <div className="relative flex flex-col w-44">
        <input
          onChange={(e) => setSearch(e.target.value)}
          onKeyPress={handleKeypress}
          value={search}
          type="text"
          className="block p-2 ps-10 text-sm text-gray-900 border  border-gray-300 rounded-lg  bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Search for User"
        />
        <div className="absolute inset-y-0 right-[-80px] bg-[#6db6ff] px-[10px] hover:bg-[#4ea7ff] text-black hover:scale-105 cursor-pointer rounded-md rtl:inset-r-0 rtl:right-0 flex items-center  duration-150">
          <button onClick={() => handlerSearch()} disabled={search === ""}>
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchBox;
