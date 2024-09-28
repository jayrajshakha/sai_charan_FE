import React from "react";
import MenuBtn from "./MenuBtn";
import Logo from "./Logo";
import Image from "next/image";
// import { useSelector } from "react-redux";

const Navbar = ({ setShow, show, setProfile, profile, logOut }) => {
  // const UserData = useSelector((state) => state.UserData.value);
  return (
    <nav className="fixed top-0 z-50 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
      <div className="px-3 py-3 lg:px-5 lg:pl-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <MenuBtn setShow={setShow} show={show} />
            <Logo />
          </div>
          <div className="flex items-center">
            <div className="flex items-center ms-3">
              <button
                type="button"
                onClick={() => setProfile(!profile)}
                className="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
              >
                <span className="sr-only">Open user menu</span>
                <Image
                  height={32}
                  width={32}
                  className="w-8 h-8 rounded-full"
                  src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                  alt="user photo"
                />
              </button>
            </div>
          </div>
          {profile && (
            <div className="absolute right-1 top-[50px] z-50 my-4 text-base list-none bg-white divide-y divide-gray-100 rounded shadow  dark:bg-gray-700 dark:divide-gray-600">
              <div className="px-4 py-3">
                <p className="text-sm text-gray-900 dark:text-white">
                  {"Jay Rajshakha"}
                </p>
                <p className="text-sm font-medium text-gray-900 truncate dark:text-gray-300">
                  {"jayrajshakha01@gmail.com"}
                </p>
              </div>
              <ul className="py-1">
                <li>
                  <button className="block px-4 py-2 w-full text-left text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white">
                    {"Admin"}
                  </button>
                </li>

                <li>
                  <button
                    onClick={logOut}
                    className="block px-4 py-2 w-full text-left text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

// export default Navbar;

export default React.memo(Navbar);
