"use client";

import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import nookies from "nookies";
import UseAddBill from "@/Imports/newBill/api/UseAddBill";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

const FormComponent = () => {
  const [formData, setFormData] = useState({
    id: uuidv4(),
    date: "",
    vahicle_no: "",
    tone: "",
    place: "",
    per_rate: "",
    ammount: "",
  });

  const { token } = nookies.get({});
  const router = useRouter();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const addEntry = async (data) => {
    const response = await UseAddBill(token, data, "66efe8f50b64f8ba0bd80a5e");
    if (response) {
      toast.success(
        "New Bill added successfully",
        { theme: "colored" },
        { autoClose: 1000 }
      );
      return router.back();
    } else {
      toast.error("Failed to add new bill", {
        theme: "colored",
        autoClose: 1000,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addEntry(formData);
    setFormData({
      id: uuidv4(),
      date: "",
      vahicle_no: "",
      tone: "",
      place: "",
      per_rate: "",
      ammount: "",
    });
  };

  return (
    <div className=" mx-auto p-4 bg-white shadow-md rounded-lg">
      <form
        onSubmit={handleSubmit}
        className=" flex items-center justify-start flex-col space-y-4"
      >
        <div className="w-[80%] flex gap-x-6">
          <div className="w-full">
            <label className="block text-sm font-medium text-gray-700">
              Vahicle No.
            </label>
            <input
              type="text"
              name="vahicle_no"
              value={formData.vahicle_no}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
              required
            />
          </div>
          <div className="w-full">
            <label className="block text-sm font-medium text-gray-700">
              place
            </label>
            <input
              type="text"
              name="place"
              value={formData.place}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
              required
            />
          </div>
        </div>
        <div className="w-[80%] flex gap-x-6">
          <div className="w-full">
            <label
              htmlFor="date"
              className="block text-sm font-medium text-gray-700"
            >
              Date
            </label>
            <input
              type="date"
              id="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
              required
            />
          </div>
          <div className="w-full">
            <label
              htmlFor="gstin"
              className="block text-sm font-medium text-gray-700"
            >
              tone
            </label>
            <input
              type="text"
              name="tone"
              value={formData.tone}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
              required
            />
          </div>
        </div>
        <div className="w-[80%] flex gap-x-6">
          <div className="w-full">
            <label
              htmlFor="billNo"
              className="block text-sm font-medium text-gray-700"
            >
              per_rate
            </label>
            <input
              type="number"
              name="per_rate"
              value={formData.per_rate}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
              required
            />
          </div>
          <div className="w-full">
            <label
              htmlFor="city"
              className="block text-sm font-medium text-gray-700"
            >
              ammount
            </label>
            <input
              type="number"
              name="ammount"
              value={formData.ammount}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
              required
            />
          </div>
        </div>

        <div className="w-[80%] flex justify-start items-center ">
          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-md shadow-sm hover:bg-blue-700"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormComponent;
