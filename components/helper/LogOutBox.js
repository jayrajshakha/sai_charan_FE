import React from "react";
import { destroyCookie } from "nookies";
import { useRouter } from "next/navigation";
import { CloseModel, WarnIcon } from "../assets";

const LogOutBox = ({ setLoggle }) => {
  const router = useRouter();

  const handlerLogout = () => {
    destroyCookie(null, "token", {
      path: "/",
    });
    destroyCookie(null, "role", {
      path: "/",
    });
    router.push("/login");
  };
  return (
    <div
      onClick={() => setLoggle(false)}
      className="fixed z-50 h-full w-full  transition-all duration-200 top-0 left-0 bg-[#00000094] flex justify-center items-center "
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className=" bg-white relative rounded-lg shadow dark:bg-gray-700"
      >
        <button
          onClick={() => setLoggle(false)}
          type="button"
          className="absolute top-3 end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
        >
          <CloseModel />
          <span className="sr-only">Close modal</span>
        </button>
        <div className="p-4 md:p-5 text-center">
          <WarnIcon />
          <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
            Are you sure you want to Logout?
          </h3>
          <button
            onClick={() => handlerLogout()}
            type="button"
            className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center"
          >
            Logout
          </button>
          <button
            onClick={() => setLoggle(false)}
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

export default React.memo(LogOutBox);
