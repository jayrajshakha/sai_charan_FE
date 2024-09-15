import React from "react";

const UserNotFound = () => {
  return (
    <div className="p-8 bg-white shadow-md rounded-lg flex flex-col items-center">
      <svg
        className="w-16 h-16 text-blue-500 mb-4"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M13 16h-1v-4H9m4 4h1v-4h1m-6-4h6m-3-4h.01M17 21h-6a2 2 0 01-2-2v-4a2 2 0 012-2h6a2 2 0 012 2v4a2 2 0 01-2 2z"
        ></path>
      </svg>
      <h2 className="text-2xl font-semibold text-gray-800 mb-2">
        User Not Found
      </h2>
      <p className="text-gray-600 mb-4 text-center">
        We couldn't find the user you're looking for. Please check the username
        and try again.
      </p>
    </div>
  );
};

export default UserNotFound;
