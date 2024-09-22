"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import LogOutBox from "../../../components/helper/LogOutBox";
import { BillStore } from "@/data/BillStore";
// import { useSelector } from "react-redux";

const Dashsboard = () => {
  const router = useRouter();
  const [toggle, setToggle] = useState(false);

  //   const UserData = useSelector((state) => state.UserData.value);

  return (
    <div className={`  ${toggle ? "h-[80vh]" : "h-full"}  p-2`}>
      <header className="flex justify-between items-center py-4 px-6 bg-white rounded-md shadow-md">
        <h1 className="text-3xl font-bold text-gray-800">Dashboard</h1>
        {/* <button
          onClick={() => setToggle(true)}
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
        >
          Logout
        </button> */}
      </header>
      <main className="  mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <section
          onClick={() => router.push("/admin/bills")}
          className="p-4 bg-white rounded-md shadow-md cursor-pointer hover:scale-110 transition-all duration-200"
        >
          <h2 className="text-2xl font-semibold text-gray-800">Bills Data</h2>
          <p className="mt-2 text-gray-600">Some Bills Data content...</p>
        </section>

        <section
          className="p-4 bg-white rounded-md shadow-md cursor-pointer hover:scale-110 transition-all duration-200"
          onClick={() => router.push("/admin/form")}
        >
          <h2 className="text-2xl font-semibold text-gray-800">Form</h2>
          <p className="mt-2 text-gray-600">Some Form content...</p>
        </section>

        <section
          onClick={() => router.push("/admin/records")}
          className="p-4 bg-white rounded-md shadow-md cursor-pointer hover:scale-110 transition-all duration-200"
        >
          <h2 className="text-2xl font-semibold text-gray-800">Records</h2>
          <p className="mt-2 text-gray-600">Some Records content...</p>
        </section>

        <section className="p-4 bg-white rounded-md shadow-md cursor-pointer hover:scale-110 transition-all duration-200">
          <h2 className="text-2xl font-semibold text-gray-800">
            User Activity
          </h2>
          <p className="mt-2 text-gray-600">Some user activity content...</p>
        </section>
        <section className="p-4 bg-white rounded-md shadow-md cursor-pointer hover:scale-110 transition-all duration-200">
          <h2 className="text-2xl font-semibold text-gray-800">Settings</h2>
          <p className="mt-2 text-gray-600">Some settings content...</p>
        </section>
      </main>
      {/* {toggle && <LogOutBox setToggle={setToggle} />} */}
    </div>
  );
};

export default React.memo(Dashsboard);
