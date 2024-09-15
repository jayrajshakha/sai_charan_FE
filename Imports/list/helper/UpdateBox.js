"use client";
import React, { useState } from "react";
import { CloseModel } from "../assets";

const UpdateBox = ({ updatedUserData, OpenEditBox, editableUser }) => {
  const [updateData, setUpdateData] = useState({
    name: editableUser?.name,
    email: editableUser?.email,
    gender: editableUser?.gender || "male",
    role: editableUser?.role,
  });

  const updateChange = (e) => {
    const { name, value } = e.target;
    setUpdateData({ ...updateData, [name]: value });
  };

  const UpdateHandler = (e) => {
    e.preventDefault();
    updatedUserData({ ...updateData, _id: editableUser?._id });
  };
  const cancelHandler = (state) => {
    OpenEditBox(state);
  };

  return (
    <div
      onClick={() => cancelHandler(false)}
      className="w-full flex items-center justify-center h-full fixed right-0 top-0 z-50 bg-[#00000094]"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative p-4 w-full max-w-md max-h-full "
      >
        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
          <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Update User
            </h3>
            <button
              onClick={() => cancelHandler(false)}
              type="button"
              className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
              data-modal-toggle="crud-modal"
            >
              <CloseModel />
              <span className="sr-only">Close modal</span>
            </button>
          </div>

          <form onSubmit={(e) => UpdateHandler(e)} className="p-4 md:p-5">
            <div className="grid gap-4 mb-4 grid-cols-2">
              <div className="col-span-2">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Name
                </label>
                <input
                  onChange={(e) => updateChange(e)}
                  type="text"
                  name="name"
                  value={updateData?.name}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Update Name"
                />
              </div>

              <div className="col-span-2">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Email
                </label>
                <input
                  onChange={(e) => updateChange(e)}
                  type="email"
                  name="email"
                  value={updateData?.email}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Update Email"
                />
              </div>

              <div className="col-span-2 sm:col-span-1">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Gender
                </label>
                <select
                  name="gender"
                  onChange={(e) => updateChange(e)}
                  value={updateData?.gender}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                >
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div className="col-span-2 sm:col-span-1">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Role
                </label>
                <select
                  name="role"
                  value={updateData?.role}
                  onChange={(e) => updateChange(e)}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                >
                  <option value="Admin">Admin</option>
                  <option value="Accounting">Accounting</option>
                  <option value="User">User</option>
                </select>
              </div>
            </div>
            <button className="text-white flex items-center justify-center  w-full text-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5  dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              Save
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateBox;
