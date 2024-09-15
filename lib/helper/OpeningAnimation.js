"use client";
import { useState, useEffect } from "react";

const OpeningAnimation = ({ onFinish }) => {
  const [showAnimation, setShowAnimation] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowAnimation(false);
      if (onFinish) {
        onFinish();
      }
    }, 3000);
    return () => clearTimeout(timer);
  }, [onFinish]);

  if (!showAnimation) {
    return null;
  }

  return (
    <div className="fixed  inset-0 flex flex-col z-[100] items-center justify-center bg-gradient-to-r from-blue-500 to-blue-900 text-white ">
      <div className="fade-in text-5xl font-bold mb-4">Welcome to</div>
      <div className="slide-up text-6xl font-extrabold">
        Sai Charan Transhport
      </div>
      <div className="pulse mt-6 text-2xl">
        Let's reach new heights together!
      </div>
    </div>
  );
};

export default OpeningAnimation;
