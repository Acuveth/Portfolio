import React, { useRef, useEffect, useState } from "react";
import "../Dashboard.css";
//import backgroundVideo from "../Assets/video2.mp4";
import Clock from "./Clock";
import { Link } from "react-router-dom";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiOutlineCalendar,
} from "react-icons/ai";
import Button from "./Button";
import InlineWidget from "@calcom/embed-react";

//Mogoče nucam tuki en form
const Dashboard = () => {
  const videoRef = useRef(null);
  const [selectedColor, setSelectedColor] = useState("blue"); // Default color
  const [isHovered, setIsHovered] = useState(false);
  const [showEmbed, setShowEmbed] = useState(false);
  const handleButtonClick = () => setShowEmbed(true);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.5;
    }
  }, []);

  const darkenColor = (color, amount) => {
    const colors = {
      blue: "#1E3A8A",
      green: "#065F46",
      red: "#991B1B",
      purple: "#6B21A8",
    };
    return colors[color] || color;
  };

  // Function to handle color selection
  const handleColorChange = (color) => {
    setSelectedColor(color);
  };

  return (
    <div className="flex items-center justify-center h-screen relative font-firacode">
      {/* 
      <div className="video-wrapper absolute top-0 left-0 w-full h-full z-0">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          className="w-full h-full object-cover"
        >
          <source src={backgroundVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      */}

      {/* Color Overlay */}
      <div className="overlay absolute top-0 left-0 w-full h-full bg-gray-900 z-10"></div>

      {/* Main Content */}
      <div className="grid grid-cols-6 grid-rows-6 gap-4 w-full h-3/4 p-4 z-20 relative">
        {/* Example Div with Dynamic Hover Border Color */}
        <div
          className="col-span-4 row-span-3 flex flex-col justify-between border-2 border-white p-4"
          style={{
            borderColor: "white",
            transition: "border-color 0.1s ease",
          }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.borderColor = selectedColor)
          }
          onMouseLeave={(e) => (e.currentTarget.style.borderColor = "white")}
        >
          {/* Main Content: Basic Info + Links */}
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
              onMouseLeave={(e) =>
                (e.currentTarget.style.borderColor = "white")
              }
            >
              <div className="text-sm text-gray-600 ">welcome</div>

              <div className="mt-2 font-firacode">
                Additional information or description goes here
              </div>
            </div>
            {/* Photo Holder */}
            <div className="w-1/4 h-full flex items-center justify-center bg-gray-300  ml-4">
              <img
                src="/path-to-photo.jpg"
                alt="Profile"
                className="w-full h-full object-cover "
              />
            </div>
          </div>
          {/* Buttons Row at the Bottom */}
          <div className="flex space-x-4 mt-4">
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white px-4 py-2 flex items-center justify-center hover:bg-blue-600"
              style={{ backgroundColor: selectedColor }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.backgroundColor = darkenColor(
                  selectedColor,
                  0.1
                ))
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundColor = selectedColor)
              }
            >
              <AiFillGithub size={24} />
              <div className="ml-2">Github</div>
            </a>
            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white px-4 flex items-center justify-center hover:bg-blue-600"
              style={{ backgroundColor: selectedColor }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.backgroundColor = darkenColor(
                  selectedColor,
                  0.1
                ))
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundColor = selectedColor)
              }
            >
              <AiFillLinkedin size={24} />
              <div className="ml-2">Linkedin</div>
            </a>
            <div>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  handleButtonClick();
                }}
                className="text-white px-4 py-2 flex items-center justify-center hover:bg-blue-600"
                style={{ backgroundColor: selectedColor }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.backgroundColor = darkenColor(
                    selectedColor,
                    0.1
                  ))
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.backgroundColor = selectedColor)
                }
              >
                <AiOutlineCalendar size={24} />
                <div className="ml-2">Book a call</div>
              </a>

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
          </div>
        </div>

        {/* Other Divs */}
        <div
          className="row-span-5 col-start-5 bg-gray-900 flex items-center justify-center border-2 border-white text-white"
          style={{
            borderColor: "white",
            transition: "border-color 0.1s ease",
          }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.borderColor = selectedColor)
          }
          onMouseLeave={(e) => (e.currentTarget.style.borderColor = "white")}
        >
          Full stack developer
        </div>

        {/* Available Now Status */}
        <div
          className="col-start-4 row-start-4 bg-gray-900 flex items-center justify-center border-2 border-white text-white font-thin"
          style={{
            borderColor: "white",
            transition: "border-color 0.1s ease",
          }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.borderColor = selectedColor)
          }
          onMouseLeave={(e) => (e.currentTarget.style.borderColor = "white")}
        >
          <span className="blinking-light"></span> Available Now
        </div>

        {/* Link to My Work */}
        <Link
          to="/my-work"
          className="col-span-2 row-span-2 col-start-2 row-start-4 bg-gray-900 border-2  flex text-white text-xl font-semibold px-6 py-4"
          style={{
            borderColor: "white",
            transition: "border-color 0.1s ease",
          }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.borderColor = selectedColor)
          }
          onMouseLeave={(e) => (e.currentTarget.style.borderColor = "white")}
        >
          Work Showoff
        </Link>

        {/* Contact Info */}
        <div
          className="row-span-3 col-start-1 row-start-4 bg-gray-900 flex flex-col px-4 py-2 border-2 text-white"
          style={{
            borderColor: "white",
            transition: "border-color 0.1s ease",
          }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.borderColor = selectedColor)
          }
          onMouseLeave={(e) => (e.currentTarget.style.borderColor = "white")}
        >
          <div className="text-xl font-semibold mt-4 mb-8">Let's connect!</div>
          <div className="text-sm  text-gray-600 my-1">Email:</div>
          <div className="mb-8">lukagaberscek3@gmail.com</div>
          <div className="text-sm  text-gray-600 mb-1">Socials:</div>
          <div className="flex flex-col space-y-1">
            <div>GitHub</div>
            <div>Linkedin</div>
          </div>
        </div>

        {/* Clock */}
        <div
          className="col-start-4 row-start-5 bg-gray-900 flex items-center justify-center border-2  text-white"
          style={{
            borderColor: "white",
            transition: "border-color 0.1s ease",
          }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.borderColor = selectedColor)
          }
          onMouseLeave={(e) => (e.currentTarget.style.borderColor = "white")}
        >
          <div className="flex flex-col items-center justify-center">
            <div className=" text-sm text-gray-600">My current time</div>
            <Clock />
            <div className=" text-sm text-gray-600">Slovenia</div>
          </div>
        </div>

        {/* Credits */}
        <div
          className="col-span-2 col-start-3 row-start-6 bg-gray-900 flex items-center justify-center border-2 text-white text-sm"
          style={{
            borderColor: "white",
            transition: "border-color 0.1s ease",
          }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.borderColor = selectedColor)
          }
          onMouseLeave={(e) => (e.currentTarget.style.borderColor = "white")}
        >
          © 2024 · Source code for the portfolio
        </div>

        {/* Circular Color Selection Buttons */}
        <div
          className="col-start-2 row-start-6 bg-gray-900 flex flex-col items-center justify-center border-2 p-4 space-y-4"
          style={{
            borderColor: isHovered ? selectedColor : "white", // Border color depends on hover state and selectedColor
          }}
          onMouseEnter={() => setIsHovered(true)} // Set hover state to true
          onMouseLeave={() => setIsHovered(false)} // Set hover state to false
        >
          <div className="flex flex-row space-x-4">
            <button
              onClick={() => handleColorChange("blue")}
              className="+ bg-blue-500 w-12 h-12 hover:bg-blue-600"
            ></button>
            <button
              onClick={() => handleColorChange("green")}
              className="+ bg-green-500 w-12 h-12 hover:bg-green-600"
            ></button>
            <button
              onClick={() => handleColorChange("red")}
              className=" bg-red-500 w-12 h-12 hover:bg-red-600"
            ></button>
            <button
              onClick={() => handleColorChange("purple")}
              className=" bg-purple-500 w-12 h-12 hover:bg-purple-600"
            ></button>
          </div>
        </div>

        {/* CV Link */}
        <div
          className="col-start-5 row-start-6 bg-gray-900 flex items-center justify-center border-2 text-white"
          style={{
            borderColor: "white",
            transition: "border-color 0.1s ease",
          }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.borderColor = selectedColor)
          }
          onMouseLeave={(e) => (e.currentTarget.style.borderColor = "white")}
        >
          <a
            href="/cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full h-full flex px-6 py-4 text-xl font-firacode font-semibold"
          >
            CV
          </a>
        </div>
        <div
          className="row-span-6 col-start-6 row-start-1 bg-gray-900 flex flex-col p-4 border-2 border-white text-white"
          style={{
            borderColor: "white",
            transition: "border-color 0.1s ease",
          }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.borderColor = selectedColor)
          }
          onMouseLeave={(e) => (e.currentTarget.style.borderColor = "white")}
        >
          <h2 className="text-xl font-semibold mb-4">Contact Me</h2>
          <form className="flex flex-col space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="bg-gray-800  border-2 border-gray-600 p-2  text-white"
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              className="bg-gray-800 border-2 border-gray-600 p-2  text-white "
              required
            />
            <textarea
              placeholder="Your Message"
              rows="16"
              className="bg-gray-800 border-2 border-gray-600 p-2 text-white resize-none "
              required
            ></textarea>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white py-2 mt-2"
              style={{ backgroundColor: selectedColor }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.backgroundColor = darkenColor(
                  selectedColor,
                  0.1
                ))
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundColor = selectedColor)
              }
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
