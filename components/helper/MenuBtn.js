import React from "react";
import { MenuBarIcon } from "../assets";

const MenuBtn = ({ setShow, show }) => {
  return (
    <button
      onClick={() => setShow(!show)}
      className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg  hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
    >
      <span className="sr-only">Open sidebar</span>
      <MenuBarIcon />
    </button>
  );
};

// export default MenuBtn;

export default React.memo(MenuBtn);
