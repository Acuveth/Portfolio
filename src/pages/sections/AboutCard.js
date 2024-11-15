import React from "react";
import "../../Dashboard.css";

const AboutCard = ({ selectedColor, isLoaded }) => {
  return (
    <div
      className={
        isLoaded
          ? "fade-in-up flex border-2 border-white text-white h-full"
          : "flex border-2 border-white text-white h-full"
      }
      style={{
        borderColor: "white",
        transition: "border-color 0.1s ease",
        overflow: "hidden",
        animationDelay: "0.2s",
      }}
      onMouseEnter={(e) => (e.currentTarget.style.borderColor = selectedColor)}
      onMouseLeave={(e) => (e.currentTarget.style.borderColor = "white")}
    >
      <div className="flex flex-col justify-around">
        <div
          className="font-semibold px-6 pt-4 pb-2 text-xl"
          style={{
            whiteSpace: "pre-wrap",
          }}
        >
          About me
        </div>

        <div className="px-6 text-xs lg:text-sm">
          I'm a full stack developer from Slovenia.
        </div>

        <div className="px-6 my-2 text-xs lg:text-sm ">
          <div className="mb-1">My primary focus lies with:</div>
          <ul className="list-disc list-inside text-xs lg:text-sm ">
            <li>JavaScript, React, CSS, HTML, and Flutter</li>
            <li>Java, PHP, Node.js, and C#</li>
            <li>SQL, MongoDB, Firebase</li>
          </ul>
        </div>

        <div className="px-6 my-2 text-xs lg:text-sm ">
          Beyond coding, I'm also passionate about philosophy, history, science,
          and business.
        </div>

        <div className="px-6 mb-6 text-xs lg:text-sm ">
          My main motto in life is "Do not use an aircraft carrier to kill a
          fly." Focusing on elegance, wholeness, and understanding to solve
          problems.
        </div>
      </div>
    </div>
  );
};

export default AboutCard;
