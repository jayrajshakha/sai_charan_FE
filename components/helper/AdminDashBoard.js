"use client";
import React, { useState } from "react";
import LogOutBox from "./LogOutBox";
import Aside from "./Aside";
import Navbar from "./Navbar";

const AdminDashBoard = ({ children }) => {
  // const [toggle, setToggle] = useState(false);
  const [profile, setProfile] = useState(false);
  const [show, setShow] = useState(false);

  const logOut = () => {
    // setToggle(true);
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-[#f0f4ff] to-[#d9e7ff]">
      <Navbar
        setShow={setShow}
        show={show}
        setProfile={setProfile}
        profile={profile}
        // logOut={logOut}
      />

      <Aside show={show} setShow={setShow} logOut={logOut} />

      <div
        onClick={() => setProfile(false)}
        className={`p-4 ${
          show ? "sm:ml-64" : null
        } transition-all duration-150`}
      >
        <div className={`  p-1  md:p-4 mt-14 `}>
          {/* {toggle && <LogOutBox setToggle={setToggle} />}  */}
          {children}
        </div>
      </div>
    </div>
  );
};

export default AdminDashBoard;
