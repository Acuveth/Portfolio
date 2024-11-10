import React, { useRef, useEffect, useState } from "react";
import "../Dashboard.css";
import Clock from "./Clock";
import { Link } from "react-router-dom";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiOutlineCalendar,
} from "react-icons/ai";
import InlineWidget from "@calcom/embed-react";
import image from "../assets/image.jpg";
import cv from "../assets/cv.png";
import emailjs from "@emailjs/browser"; // Import EmailJS

const Dashboard = () => {
  const formRef = useRef(); // Ref for the form
  const [selectedColor, setSelectedColor] = useState("#6e66cb"); // Default color
  const [isHovered, setIsHovered] = useState(false);
  const [showEmbed, setShowEmbed] = useState(false);
  const handleButtonClick = () => setShowEmbed(true);

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_pkl3sal",
        "template_710qcfo",
        formRef.current,
        "czEJnd0GyLqybqwWS"
      )
      .then(
        (result) => {
          alert("Message sent successfully!");
          formRef.current.reset(); // Reset form fields
        },
        (error) => {
          alert("Failed to send message, please try again.");
        }
      );
  };

  // Function to darken a color by a specific amount (0 to 1)
  const darkenColor = (color, amount) => {
    let colorValue = color.startsWith("#") ? color.slice(1) : color;

    // Convert hex to RGB
    let r = parseInt(colorValue.substring(0, 2), 16);
    let g = parseInt(colorValue.substring(2, 4), 16);
    let b = parseInt(colorValue.substring(4, 6), 16);

    // Darken each channel by the specified amount
    r = Math.max(0, Math.min(255, Math.floor(r * (1 - amount))));
    g = Math.max(0, Math.min(255, Math.floor(g * (1 - amount))));
    b = Math.max(0, Math.min(255, Math.floor(b * (1 - amount))));

    // Convert RGB back to hex
    const darkenedColor = `#${((1 << 24) + (r << 16) + (g << 8) + b)
      .toString(16)
      .slice(1)}`;

    return darkenedColor;
  };

  // Function to handle color selection
  const handleColorChange = (color) => {
    setSelectedColor(color);
  };

  const buttonTextColor =
    selectedColor === "#d9eaf2" ? "text-gray-900" : "text-white";

  return (
    <div className="flex items-center justify-center h-screen relative font-firacode">
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
                Hi, I'm Luka Gaberšček, a full stack software developer with a
                strong passion for technology and math. My goal in life is to
                build and create new and exciting ideas.
                <div className="mt-16">
                  Feel free to reach out to me if you have any projects in mind.
                </div>
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
              <div className="ml-2">Github</div>
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
              <div className="ml-2">Linkedin</div>
            </a>
            <div>
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
          className="row-span-5 col-start-5 bg-gray-900 flex border-2 border-white text-white"
          style={{
            borderColor: "white",
            transition: "border-color 0.1s ease",
          }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.borderColor = selectedColor)
          }
          onMouseLeave={(e) => (e.currentTarget.style.borderColor = "white")}
        >
          <div className="flex flex-col">
            <div className="text-xl font-semibold px-6 py-4">About me</div>
            <div className="px-6 text-sm">
              I'm a full stack developer from Slovenia.
            </div>
            <div className="px-6 text-sm my-4">
              <div className="mb-1">My primary focus lies with:</div>
              <li>JavaScript, React, CSS, HTML and Flutter </li>
              <li>Java, PHP, Node js and C#</li>
              <li>SQL, MongoDB, Firebase</li>
            </div>

            <div className="px-6 text-sm my-4">
              Beyond coding I'm also passionate about philosophy, history,
              science and business.
            </div>
            <div className="px-6 text-sm">
              My main moto in life is "Do not use an aircraft carrier to kill a
              fly". Focusing on elegance, wholeness and understanding in order
              to solve problems.
            </div>
          </div>
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
          <div
            className="blinking-light"
            style={{
              width: "10px",
              height: "10px",
              backgroundColor: selectedColor,
              borderRadius: "50%",
              marginRight: "8px",
              animation: "blinkPulse 1s infinite ease-in-out", // Pulsing effect
              transition: "background-color 0.3s ease", // Smooth color transition
            }}
          ></div>

          <div className="font-semibold text-xl">Available Now</div>
        </div>

        {/* Link to My Work */}
        <Link
          to="/my-work"
          className="col-span-2 row-span-2 col-start-2 row-start-4 bg-gray-900 border-2 flex text-white text-xl font-semibold px-6 py-4 relative overflow-hidden"
          style={{
            borderColor: "white",
            transition: "border-color 0.1s ease",
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
              backgroundImage: `url(${image})`,
              opacity: 0,
            }}
          ></div>

          <span className="relative z-10">Work Showoff</span>
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

        <div
          className="col-span-1 col-start-2 px-4 row-start-6 bg-gray-900 flex items-center text-center justify-center border-2 text-white text-sm"
          style={{
            borderColor: "white",
            transition: "border-color 0.1s ease",
          }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.borderColor = selectedColor)
          }
          onMouseLeave={(e) => (e.currentTarget.style.borderColor = "white")}
        >
          © 2024 · Made using React, tailwindcss, cal.com & EmailJS
        </div>

        <div
          className="col-span-2 col-start-3 row-start-6 bg-gray-900 flex flex-col items-center justify-center border-2 p-4 space-y-4"
          style={{
            borderColor: isHovered ? selectedColor : "white",
          }}
          onMouseEnter={() => setIsHovered(true)} // Set hover state to true
          onMouseLeave={() => setIsHovered(false)} // Set hover state to false
        >
          <div className="flex flex-row space-x-4">
            <button
              onClick={() => handleColorChange("#6e66cb")}
              className="bg-[#6e66cb] w-12 h-12 hover:bg-[#5851a2]"
            ></button>
            <button
              onClick={() => handleColorChange("#13cc80")}
              className="bg-[#13cc80] w-12 h-12 hover:bg-[#0fa366]"
            ></button>
            <button
              onClick={() => handleColorChange("#ff5883")}
              className="bg-[#ff5883] w-12 h-12 hover:bg-[#cc4668]"
            ></button>
            <button
              onClick={() => handleColorChange("#4d1f4d")}
              className="bg-[#4d1f4d] w-12 h-12 hover:bg-[#3d183d]"
            ></button>
            <button
              onClick={() => handleColorChange("#ffc24d")}
              className="bg-[#ffc24d] w-12 h-12 hover:bg-[#cc9b3d]" // Yellow button
            ></button>
            <button
              onClick={() => handleColorChange("#f37c54")}
              className="bg-[#f37c54] w-12 h-12 hover:bg-[#c26343]" // Orange button
            ></button>
            <button
              onClick={() => handleColorChange("#d9eaf2")}
              className="bg-[#d9eaf2] w-12 h-12 hover:bg-[#b0c5cf]"
            ></button>
          </div>
        </div>

        {/* CV Link */}
        <div
          className="col-start-5 row-start-6 bg-gray-900 flex items-center justify-center border-2 text-white relative overflow-hidden"
          style={{
            borderColor: "white",
            transition: "border-color 0.1s ease",
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
              backgroundImage: `url(${cv})`, // Replace `image` with the imported image path
              opacity: 0,
            }}
          ></div>

          <a
            href="/cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full h-full flex px-4 py-2 text-xl font-firacode font-semibold relative z-10"
          >
            My CV
          </a>
        </div>
        {/* Contact Form Section */}
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
          <form
            ref={formRef}
            onSubmit={sendEmail}
            className="flex flex-col space-y-4"
          >
            <input
              type="text"
              name="user_name"
              placeholder="Your Name"
              className="bg-gray-800 border-2 border-gray-600 p-2 text-white"
              required
            />
            <input
              type="email"
              name="user_email"
              placeholder="Your Email"
              className="bg-gray-800 border-2 border-gray-600 p-2 text-white"
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows="16"
              className="bg-gray-800 border-2 border-gray-600 p-2 text-white resize-none"
              required
            ></textarea>
            <button
              type="submit"
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
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
