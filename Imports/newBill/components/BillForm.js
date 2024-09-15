// components/BillForm.js
import { useState } from "react";

const BillForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    date: "",
    gstin: "",
    billNo: "",
    city: "",
    stateCode: "",
    total: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form data submitted:", formData);
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
          <div className="w-full">
            <label
              htmlFor="total"
              className="block text-sm font-medium text-gray-700"
            >
              Total
            </label>
            <input
              type="number"
              id="total"
              name="total"
              value={formData.total}
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
