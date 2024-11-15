import React from "react";

const CVCard = ({ selectedColor, cv, isLoaded }) => {
  return (
    <div
      className={
        isLoaded
          ? "fade-in-up  flex items-center justify-center border-2 px-6 py-4 relative overflow-hidden h-full w-full"
          : "flex items-center justify-center border-2 relative overflow-hidden h-full w-full"
      }
      style={{
        borderColor: "white",
        transition: "border-color 0.1s ease",
        animationDelay: "1s",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = selectedColor;
        e.currentTarget.querySelector(".hover-bg").style.opacity = 1;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = "white";
        e.currentTarget.querySelector(".hover-bg").style.opacity = 0;
      }}
    >
      {/* Pseudo-element for background image */}
      <div
        className="hover-bg absolute inset-0 bg-cover bg-center transition-opacity duration-300"
        style={{
          backgroundImage: `url(${cv})`,
          opacity: 0,
        }}
      ></div>

      <a
        href="/cv.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="w-full h-full flex text-xl font-firacode font-semibold relative z-10"
      >
        My CV
      </a>
    </div>
  );
};

export default CVCard;
