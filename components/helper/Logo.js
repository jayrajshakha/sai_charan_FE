import React from "react";

const Logo = () => {
  return (
    <div className="flex ms-2 md:me-24 cursor-pointer">
      <img
        src="https://flowbite.com/docs/images/logo.svg"
        className="h-8 me-3"
        alt="Logo"
      />
      <span className="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap dark:text-white">
        Logo
      </span>
    </div>
  );
};

export default React.memo(Logo);
