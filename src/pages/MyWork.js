import React from "react";
import { Link, useLocation } from "react-router-dom";
import { IoArrowBack } from "react-icons/io5"; // Import an icon for the back arrow

const MyWork = () => {
  const location = useLocation();
  const { selectedColor } = location.state || { selectedColor: "gray" }; // Default to gray if not set

  return (
    <div className="flex items-center justify-center h-screen bg-gray-900">
      {/* Back Arrow */}
      <Link
        to="/"
        className="absolute top-4 left-4 text-2xl"
        style={{ color: selectedColor }}
      >
        <IoArrowBack />
      </Link>

      <div className="w-3/4 h-3/4 p-4 rounded-xl text-white relative">
        {/* Project Grid */}
        <div className="grid grid-cols-2 gap-4 w-full h-full">
          <div
            className="flex items-center justify-center p-4 rounded-xl border"
            style={{ borderColor: selectedColor }}
          >
            Project 1
          </div>
          <div
            className="flex items-center justify-center p-4 rounded-xl border"
            style={{ borderColor: selectedColor }}
          >
            Project 2
          </div>
          <div
            className="flex items-center justify-center p-4 rounded-xl border"
            style={{ borderColor: selectedColor }}
          >
            Project 3
          </div>
          <div
            className="flex items-center justify-center p-4 rounded-xl border"
            style={{ borderColor: selectedColor }}
          >
            Project 4
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyWork;
