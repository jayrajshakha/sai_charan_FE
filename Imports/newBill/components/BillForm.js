"use client";

import { useState } from "react";
import UseAddBill from "../api/UseAddBill";
import nookies from "nookies";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

const BillForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    date: "",
    gstin: "",
    billNo: "",
    city: "",
    stateCode: "",
  });

  const { token } = nookies.get({});
  const router = useRouter();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const addBill = async (data) => {
    const response = await UseAddBill(token, data);
    if (response) {
      toast.success(
        "New Bill added successfully",
        { theme: "colored" },
        { autoClose: 1000 }
      );
      return router.push("/admin/list");
    } else {
      toast.error("Failed to add new bill", {
        theme: "colored",
        autoClose: 1000,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form data submitted:", formData);

    const newBill = {
      bill_no: "00001",
      name: formData?.name,
      address: formData.address,
      date: formData.date,
      city: formData.city,
      state_code: formData.stateCode,
      GSTIN: formData.gstin,
      total_ammount: 0,
      bill_entry: [],
    };

    addBill(newBill);
  };

  return (
    <div className=" mx-auto p-4 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold text-center mb-4">Bill Header Form</h2>
      <form
        onSubmit={handleSubmit}
        className=" flex items-center justify-start flex-col space-y-4"
      >
        <div className="w-[80%]">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
            required
          />
        </div>
        <div className="w-[80%]">
          <label
            htmlFor="address"
            className="block text-sm font-medium text-gray-700"
          >
            Address
          </label>
          <input
            type="text"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
            required
          />
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
              GSTIN
            </label>
            <input
              type="text"
              id="gstin"
              name="gstin"
              value={formData.gstin}
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
              Bill No
            </label>
            <input
              type="text"
              id="billNo"
              name="billNo"
              value={formData.billNo}
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
              City
            </label>
            <input
              type="text"
              id="city"
              name="city"
              value={formData.city}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
              required
            />
          </div>
        </div>
        <div className="flex w-[80%] gap-x-6">
          <div className="w-full">
            <label
              htmlFor="stateCode"
              className="block text-sm font-medium text-gray-700"
            >
              State Code
            </label>
            <input
              type="text"
              id="stateCode"
              name="stateCode"
              value={formData.stateCode}
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

export default BillForm;
