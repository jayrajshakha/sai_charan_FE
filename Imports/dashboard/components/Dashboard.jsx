"use client";
import React from "react";
import { useRouter } from "next/navigation";

const Dashsboard = () => {
  const router = useRouter();

  return (
    <div className={`h-full p-2`}>
      <header className="flex justify-between items-center py-4 px-6 bg-white rounded-md shadow-md">
        <h1 className="text-3xl font-bold text-gray-800">Dashboard</h1>
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

        <section className="p-4 bg-white rounded-md shadow-md cursor-pointer hover:scale-110 transition-all duration-200">
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
    </div>
  );
};

export default React.memo(Dashsboard);
