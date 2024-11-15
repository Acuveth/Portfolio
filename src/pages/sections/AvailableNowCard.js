import React from "react";

const AvailableNowCard = ({ selectedColor, isLoaded }) => {
  return (
    <div
      className={
        isLoaded
          ? "fade-in-up flex items-center justify-center border-2 border-white text-white font-thin h-full lg:py-4 xl:py-4 w-full py-4"
          : "flex items-center justify-center border-2 border-white text-white font-thin h-full lg:py-4 xl:py-4 w-full py-4"
      }
      style={{
        borderColor: "white",
        transition: "border-color 0.1s ease",
        animationDelay: "0.6s",
      }}
      onMouseEnter={(e) => (e.currentTarget.style.borderColor = selectedColor)}
      onMouseLeave={(e) => (e.currentTarget.style.borderColor = "white")}
    >
      <div
        className="blinking-light"
        style={{
          width: "10px",
          height: "10px",
          backgroundColor: selectedColor,
          borderRadius: "50%",
          marginRight: "8px",
          animation: "blinkPulse 1s infinite ease-in-out",
          transition: "background-color 0.3s ease",
        }}
      ></div>

      <div className="font-semibold text-sm sm:text-sm lg:text-base xl:text-lg 2xl:text-xl">
        Available Now
      </div>
    </div>
  );
};

export default AvailableNowCard;
