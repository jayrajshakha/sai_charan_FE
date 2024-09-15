import React from "react";

const Loading = () => {
  return (
    <div className="flex justify-center items-center h-32">
      <div className="loader border-t-4 border-blue-500 rounded-full w-12 h-12 animate-spin"></div>
    </div>
  );
};

export default Loading;
