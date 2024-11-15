import React from "react";

const FooterCard = ({ selectedColor, isLoaded }) => {
  return (
    <div
      className={
        isLoaded
          ? "fade-in-up xl1100:text-xs xl1700:text-sm px-4 row-start-6 flex items-center text-center justify-center border-2 h-full text-xs lg:text-sm xl:text-base w-full"
          : "xl1100:text-xs xl1700:text-sm px-4 row-start-6 flex items-center text-center justify-center border-2 h-full text-xs lg:text-sm xl:text-base w-full"
      }
      style={{
        borderColor: "white",
        transition: "border-color 0.1s ease",
        animationDelay: "0.8s",
      }}
      onMouseEnter={(e) => (e.currentTarget.style.borderColor = selectedColor)}
      onMouseLeave={(e) => (e.currentTarget.style.borderColor = "white")}
    >
      © 2024 · Made using React, tailwindcss, cal.com & EmailJS
    </div>
  );
};

export default FooterCard;
