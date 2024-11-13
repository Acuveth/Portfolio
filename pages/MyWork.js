import React from "react";
import { Link, useLocation } from "react-router-dom";
import { IoArrowBack } from "react-icons/io5"; 

const MyWork = () => {
  const location = useLocation();
  const { selectedColor } = location.state || { selectedColor: "gray" }; 

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-900">
      {/* Back Arrow */}
      <div className="w-full flex justify-start lg:absolute lg:top-4 lg:left-4 lg:w-auto">
        <Link
          to="/"
          className="text-2xl ml-4 mt-4 lg:ml-0 lg:mt-0"
          style={{ color: selectedColor }}
        >
          <IoArrowBack />
        </Link>
      </div>

      {/* Main Content */}
      <div className="w-full h-full lg:w-3/4 lg:h-3/4 p-4 rounded-xl text-white relative">
        {/* Project Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 w-full h-full">
          <div
            className="flex items-center justify-center p-4 rounded-xl border"
            style={{ borderColor: selectedColor }}
          >
            ŠDG Spletna stran
          </div>
          <div
            className="flex items-center justify-center p-4 rounded-xl border"
            style={{ borderColor: selectedColor }}
          >
            Diploma projekt
          </div>
          <div
            className="flex items-center justify-center p-4 rounded-xl border"
            style={{ borderColor: selectedColor }}
          >
            VAS Aplikacija
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
