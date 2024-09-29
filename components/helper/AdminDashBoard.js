"use client";
import React, { useState } from "react";
import Aside from "./Aside";
import Navbar from "./Navbar";

const AdminDashBoard = ({ children }) => {
  const [profile, setProfile] = useState(false);
  const [show, setShow] = useState(false);

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-[#f0f4ff] to-[#d9e7ff]">
      <Navbar
        setShow={setShow}
        show={show}
        setProfile={setProfile}
        profile={profile}
      />

      <Aside show={show} setShow={setShow} />

      <div
        onClick={() => setProfile(false)}
        className={`p-4 ${
          show ? "sm:ml-64" : null
        } transition-all duration-150`}
      >
        <div className={`  p-1  md:p-4 mt-14 `}>{children}</div>
      </div>
    </div>
  );
};

export default AdminDashBoard;
