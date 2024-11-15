import React, { useState } from "react";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiOutlineCalendar,
} from "react-icons/ai";
import InlineWidget from "@calcom/embed-react";
import "../../Dashboard.css";

const ProfileCard = ({
  selectedColor,
  buttonTextColor,
  darkenColor,
  isLoaded,
  isSmallScreen,
}) => {
  const [showEmbed, setShowEmbed] = useState(false);
  const handleButtonClick = () => setShowEmbed(true);

  return (
    <div
      className={
        isLoaded
          ? "fade-in-up flex flex-col justify-between border-2 border-white p-4 h-full"
          : "flex flex-col justify-between border-2 border-white p-4 h-full"
      }
      style={{
        borderColor: "white",
        transition: "border-color 0.1s ease",
        animationDelay: "0.1s",
      }}
      onMouseEnter={(e) => (e.currentTarget.style.borderColor = selectedColor)}
      onMouseLeave={(e) => (e.currentTarget.style.borderColor = "white")}
    >
      <div className="flex flex-row justify-between w-full h-full text-white">
        <div
          className="flex flex-col flex-grow"
          style={{
            borderColor: "white",
            transition: "border-color 0.1s ease",
          }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.borderColor = selectedColor)
          }
          onMouseLeave={(e) => (e.currentTarget.style.borderColor = "white")}
        >
          <div className="text-sm text-gray-600">welcome</div>
          <div className="mt-2 text-xs lg:text-sm xl:text-base">
            Hi, I'm Luka Gaberšček, a full stack software developer with a
            strong passion for technology and math. My goal in life is to build
            and create new and exciting ideas.
            <div className="text-xs lg:text-sm xl:text-base xl:mt-16 lg:mt-8">
              Feel free to reach out to me if you have any projects in mind.
            </div>
          </div>
        </div>

        <div className="w-1/4 h-full flex items-center justify-center bg-gray-300 ml-4 hidden lg:flex">
          <img
            src="/path-to-photo.jpg"
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      <div
        className={`flex mt-4 lg:space-x-4 ${
          isSmallScreen
            ? "flex-row items-center justify-center space-x-4"
            : "space-x-4"
        }`}
      >
        <a
          href="https://github.com/Acuveth"
          target="_blank"
          rel="noopener noreferrer"
          className={`px-4 py-2 flex items-center justify-center hover:bg-blue-600 ${buttonTextColor}`}
          style={{ backgroundColor: selectedColor }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.backgroundColor = darkenColor(
              selectedColor,
              0.2
            ))
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.backgroundColor = selectedColor)
          }
        >
          <AiFillGithub size={24} />
          <div className="ml-2 hidden lg:block text-xs xl:text-base lg:text-sm">
            Github
          </div>
        </a>

        <a
          href="https://www.linkedin.com/in/luka-gaber%C5%A1%C4%8Dek-608285163/"
          target="_blank"
          rel="noopener noreferrer"
          className={`px-4 py-2 flex items-center justify-center hover:bg-blue-600 ${buttonTextColor}`}
          style={{ backgroundColor: selectedColor }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.backgroundColor = darkenColor(
              selectedColor,
              0.2
            ))
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.backgroundColor = selectedColor)
          }
        >
          <AiFillLinkedin size={24} />
          <div className="ml-2 hidden lg:block text-xs xl:text-base lg:text-sm">
            Linkedin
          </div>
        </a>

        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            handleButtonClick();
          }}
          className={`px-4 py-2 flex items-center justify-center hover:bg-blue-600 ${buttonTextColor}`}
          style={{ backgroundColor: selectedColor }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.backgroundColor = darkenColor(
              selectedColor,
              0.2
            ))
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.backgroundColor = selectedColor)
          }
        >
          <AiOutlineCalendar size={24} />
          <div className="ml-2 hidden lg:block text-xs xl:text-base lg:text-sm">
            Book a call
          </div>
        </a>
      </div>

      {showEmbed && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-4 rounded-lg w-[400px] h-[600px] overflow-auto">
            <InlineWidget calLink="luka-0luw2s" />
          </div>
          <button
            onClick={() => setShowEmbed(false)}
            className="absolute top-4 left-4 text-white bg-black px-2 py-1 rounded hover:text-xl"
          >
            Close
          </button>
        </div>
      )}
    </div>
  );
};

export default ProfileCard;
