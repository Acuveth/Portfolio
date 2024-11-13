import React from "react";
import Clock from "../Clock"; // Assuming Clock is a separate component that displays the current time

const CurrentTimeCard = ({ selectedColor, isLoaded }) => {
  return (
    <div
      className={
        isLoaded
          ? "fade-in-up bg-gray-900 flex items-center justify-center border-2 h-full w-full py-4 lg:py-2"
          : "bg-gray-900 flex items-center justify-center border-2 h-full w-full py-4 lg:py-2"
      }
      style={{
        borderColor: "white",
        transition: "border-color 0.1s ease",
        animationDelay: "0.7s",
      }}
      onMouseEnter={(e) => (e.currentTarget.style.borderColor = selectedColor)}
      onMouseLeave={(e) => (e.currentTarget.style.borderColor = "white")}
    >
      <div className="flex flex-col items-center justify-center lg:py-2 xl:py-4">
        <div className="text-gray-600 hidden 2xl:block xl:text-xs 2xl:text-sm ">
          My current time
        </div>
        <Clock />
        <div className="text-gray-600 hidden 2xl:block xl:text-xs 2xl:text-sm">
          Slovenia
        </div>
      </div>
    </div>
  );
};

export default CurrentTimeCard;
