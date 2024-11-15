import React from "react";
import { Link } from "react-router-dom";

const WorkShowoffCard = ({ selectedColor, image, isLoaded }) => {
  return (
    <div
      className={
        isLoaded
          ? "fade-in-up border-2 flex text-xl font-semibold px-6 py-4 relative overflow-hidden h-full w-full"
          : "border-2 flex text-xl font-semibold px-6 py-4 relative overflow-hidden h-full w-full"
      }
      style={{
        borderColor: "white",
        transition: "border-color 0.1s ease",
        animationDelay: "1s",
      }}
    >
      <Link
        to="/my-work"
        onMouseEnter={(e) => {
          e.currentTarget.style.borderColor = selectedColor;
          e.currentTarget.querySelector(".hover-bg").style.opacity = 1;
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.borderColor = "white";
          e.currentTarget.querySelector(".hover-bg").style.opacity = 0;
        }}
      >
        <div
          className="hover-bg absolute inset-0 bg-cover bg-center transition-opacity duration-300"
          style={{
            backgroundImage: `url(${image})`,
            opacity: 0,
          }}
        ></div>

        <span className="relative z-10">Work Showoff</span>
      </Link>
    </div>
  );
};

export default WorkShowoffCard;
