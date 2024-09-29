"use client";
import { usePathname, useRouter } from "next/navigation";
import React from "react";
import { CreateIcon, DashboardIcon, LogInIcon, RecordsIcon } from "../assets";
import { toast } from "react-toastify";
import { destroyCookie } from "nookies";

const Aside = ({ show, setShow }) => {
  const handlerLogout = () => {
    toast.success("Logged out", { theme: "colored", autoClose: 1000 });
    destroyCookie(null, "token", {
      path: "/",
    });
    destroyCookie(null, "role", {
      path: "/",
    });
    router.push("/login");
  };

  const router = useRouter();
  const clientPathName = usePathname();

  return (
    <aside
      className={`fixed top-0  z-40 w-64 h-screen pt-20 duration-300  transition-all   bg-white border-r border-gray-200 ${
        show ? "left-0" : "-left-[260px]"
      } dark:bg-gray-800 dark:border-gray-700  `}
    >
      <div className="h-full px-3 pb-4 overflow-y-auto">
        <ul className="space-y-2 font-medium">
          <li
            onClick={() => {
              router.push("/admin");
              setShow(false);
            }}
            className="cursor-pointer hover:scale-105 transition-all duration-200"
          >
            <a
              className={`flex items-center p-2 rounded-lg text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 
                ${
                  ["/admin"].includes(clientPathName) &&
                  "bg-gray-100 dark:bg-gray-700"
                }
                `}
            >
              <DashboardIcon />
              <span className="ms-3">Dashboard</span>
            </a>
          </li>
          <li
            onClick={() => {
              router.push("/admin/list");
              setShow(false);
            }}
            className="cursor-pointer hover:scale-105 transition-all duration-200"
          >
            <a
              className={`flex items-center p-2 rounded-lg text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 
                ${
                  ["/admin/list"].includes(clientPathName) &&
                  "bg-gray-100 dark:bg-gray-700"
                }
                `}
            >
              <RecordsIcon />
              <span className="ms-3">Bill List</span>
            </a>
          </li>
          <li
            onClick={() => {
              router.push("/admin/form");
              setShow(false);
            }}
            className="cursor-pointer hover:scale-105 transition-all duration-200"
          >
            <a
              className={`flex items-center p-2 rounded-lg text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 
                ${
                  ["/admin/form"].includes(clientPathName) &&
                  "bg-gray-100 dark:bg-gray-700"
                }
                `}
            >
              <CreateIcon />
              <span className="ms-3">New Bill</span>
            </a>
          </li>
          <li
            onClick={handlerLogout}
            className="cursor-pointer hover:scale-105 transition-all duration-200"
          >
            <a className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
              <LogInIcon />
              <span className="ms-3">Log Out</span>
            </a>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default React.memo(Aside);
