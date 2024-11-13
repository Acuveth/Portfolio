import React from "react";

const ConnectCard = ({ selectedColor, isLoaded }) => {
  return (
    <div
      className={
        isLoaded
          ? "fade-in-up lg:px-2 xl:px-4 bg-gray-900 flex flex-col px-6 py-4  border-2 justify-around h-full w-full"
          : "lg:px-2 xl:px-4 bg-gray-900 flex flex-col px-6 py-4  border-2 justify-around w-full"
      }
      style={{
        borderColor: "white",
        transition: "border-color 0.1s ease",
        animationDelay: "0.4s",
      }}
      onMouseEnter={(e) => (e.currentTarget.style.borderColor = selectedColor)}
      onMouseLeave={(e) => (e.currentTarget.style.borderColor = "white")}
    >
      <div className="text-xl pb-2 font-semibold">Let's connect!</div>

      <div>
        <div className="text-xs lg:text-sm xl:text-base text-gray-600 my-1">
          Email:
        </div>
        <div className="text-xs lg:text-sm xl1700:text-base">
          lukagaberscek3@gmail.com
        </div>
      </div>

      <div className="mb-4 mt-4 hidden lg:block">
        <div className="text-xs lg:text-sm xl:text-base text-gray-600 mb-1">
          Socials:
        </div>
        <div className="text-xs lg:text-sm xl:text-base flex flex-col space-y-1">
          <a
            href="https://github.com/Acuveth"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline text-white"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/luka-gaber%C5%A1%C4%8Dek-608285163/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline text-white text-xs lg:text-sm xl:text-base"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </div>
  );
};

export default ConnectCard;
