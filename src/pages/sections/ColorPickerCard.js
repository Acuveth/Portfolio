import React, { useState } from "react";

const ColorPickerCard = ({ selectedColor, handleColorChange, isLoaded }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={
        isLoaded
          ? "fade-in-up flex flex-col items-center justify-center border-2 p-4 h-full w-full"
          : "flex flex-col items-center justify-center border-2 p-4 h-full w-full"
      }
      style={{
        borderColor: isHovered ? selectedColor : "white",
        transition: "border-color 0.1s ease",
        animationDelay: "0.9s",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex justify-center gap-1 md:gap-2 2xl:gap-4">
        <button
          onClick={() => handleColorChange("#6e66cb")}
          className="bg-[#6e66cb] hover:bg-[#5851a2] md:w-12 md:h-12 w-10 h-10 transition-all"
        ></button>
        <button
          onClick={() => handleColorChange("#13cc80")}
          className="bg-[#13cc80] hover:bg-[#0fa366] md:w-12 md:h-12 w-10 h-10 transition-all"
        ></button>
        <button
          onClick={() => handleColorChange("#ff5883")}
          className="bg-[#ff5883] hover:bg-[#cc4668] md:w-12 md:h-12 w-10 h-10 transition-all"
        ></button>
        <button
          onClick={() => handleColorChange("#4d1f4d")}
          className="bg-[#4d1f4d] hover:bg-[#3d183d] md:w-12 md:h-12 w-10 h-10 transition-all"
        ></button>
        <button
          onClick={() => handleColorChange("#ffc24d")}
          className="bg-[#ffc24d] hover:bg-[#cc9b3d] md:w-12 md:h-12 w-10 h-10 transition-all"
        ></button>
        <button
          onClick={() => handleColorChange("#f37c54")}
          className="bg-[#f37c54] hover:bg-[#c26343] md:w-12 md:h-12 w-10 h-10 transition-all"
        ></button>
        <button
          onClick={() => handleColorChange("#d9eaf2")}
          className="bg-[#d9eaf2] hover:bg-[#b0c5cf] md:w-12 md:h-12 w-10 h-10 transition-all"
        ></button>
      </div>
    </div>
  );
};

export default ColorPickerCard;
