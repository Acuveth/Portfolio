import React, { useRef, useEffect, useState } from "react";
import "../Dashboard.css";
import image from "../Assets/image.jpg";
import cv from "../Assets/cv.png";
import emailjs from "@emailjs/browser"; // Import EmailJS
import ProfileCard from "./sections/ProfileCard";
import AboutCard from "./sections/AboutCard";
import AvailableNowCard from "./sections/AvailableNowCard";
import WorkShowoffCard from "./sections/WorkShowoffCard";
import ConnectCard from "./sections/ConnectCard";
import CurrentTimeCard from "./sections/CurrentTimeCard";
import FooterCard from "./sections/FooterCard";
import ColorPickerCard from "./sections/ColorPickerCard";
import CVCard from "./sections/CVCard";
import ContactFormCard from "./sections/ContactFormCard";

//Responsive design za mobi in tablce
//Dodat link do CV in moja slika

// Custom hook to detect screen size
const useMediaQuery = (query) => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    const listener = () => setMatches(media.matches);
    media.addEventListener("change", listener);
    return () => media.removeEventListener("change", listener);
  }, [matches, query]);

  return matches;
};

const Dashboard = () => {
  const formRef = useRef(); // Ref for the form
  const [selectedColor, setSelectedColor] = useState("#6e66cb"); // Default color
  const [isLoaded, setIsLoaded] = useState(false);

  // Detect screen size less than lg (1024px)
  const isSmallScreen = useMediaQuery("(max-width: 1024px)");

  // For staggered animation on load
  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

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
    <div className="relative font-firacode bg-gray-900 text-white">
      {/* Large Screen Dashboard */}
      {!isSmallScreen && (
        <div className="flex items-center justify-center h-screen relative font-firacode overlay absolute top-0 left-0 w-full h-full z-10">
          {/* Main Content */}
          <div className="grid 2xl:grid-cols-6 2xl:grid-rows-6 2xl:h-3/4 2xl:gap-4 lg:grid-cols-4 lg:h-full xl:gap-2 sm:grid-cols-1 sm:h-full w-full p-4 z-20 relative text-white">
            <div className="col-span-4 row-span-3">
              {/* Prvi DIV Hello*/}
              <ProfileCard
                selectedColor={selectedColor}
                buttonTextColor={buttonTextColor}
                darkenColor={darkenColor}
                isLoaded={isLoaded}
              />
            </div>

            <div className="2xl:row-span-5 2xl:col-start-5 2xl:col-span-1 lg:row-span-5 lg:col-span-2 lg:row-start-7">
              {/* About me */}
              <AboutCard selectedColor={selectedColor} isLoaded={isLoaded} />
            </div>

            <div className="col-start-4 row-start-4">
              {/* Available Now Status */}
              <AvailableNowCard
                selectedColor={selectedColor}
                isLoaded={isLoaded}
              />
            </div>

            <div className="col-span-2 row-span-2 col-start-2 row-start-4">
              {/* Link to My Work */}
              <WorkShowoffCard
                selectedColor={selectedColor}
                image={image}
                isLoaded={isLoaded}
              />
            </div>

            <div className="row-span-3 col-start-1 row-start-4">
              {/* Contact Info */}
              <ConnectCard selectedColor={selectedColor} isLoaded={isLoaded} />
            </div>

            <div className="col-start-4 row-start-5">
              {/* Clock */}
              <CurrentTimeCard
                selectedColor={selectedColor}
                isLoaded={isLoaded}
              />
            </div>
            <div className="col-span-1 col-start-2">
              {/* Credits */}
              <FooterCard selectedColor={selectedColor} isLoaded={isLoaded} />
            </div>
            <div className="col-span-2 col-start-3 row-start-6">
              {/* Buttons */}
              <ColorPickerCard
                selectedColor={selectedColor}
                handleColorChange={handleColorChange}
                isLoaded={isLoaded}
              />
            </div>
            <div className="2xl:row-span-1 2xl:col-span-1 2xl:col-start-5 2xl:row-start-6 lg:row-span-2 lg:col-span-2 lg:col-start-1 lg:row-start-12">
              {/* CV Link */}
              <CVCard
                selectedColor={selectedColor}
                cv={cv}
                isLoaded={isLoaded}
              />
            </div>

            <div className="2xl:row-span-6 2xl:col-start-6 2xl:row-start-1 lg:row-span-7 lg:col-span-2 lg:col-start-3 lg:row-start-7">
              {/* Contact Form Section */}
              <ContactFormCard
                selectedColor={selectedColor}
                buttonTextColor={buttonTextColor}
                darkenColor={darkenColor}
                formRef={formRef}
                sendEmail={sendEmail}
                isLoaded={isLoaded}
              />
            </div>
          </div>
        </div>
      )}

      {/* Small Screen Dashboard */}
      {isSmallScreen && (
        <div className="flex flex-col items-center h-auto space-y-0.5">
          {/* Duplicate Dashboard Content */}
          <ProfileCard
            selectedColor={selectedColor}
            buttonTextColor={buttonTextColor}
            darkenColor={darkenColor}
            isLoaded={isLoaded}
            isSmallScreen={isSmallScreen}
          />
          <AboutCard selectedColor={selectedColor} isLoaded={isLoaded} />

          <WorkShowoffCard
            selectedColor={selectedColor}
            image={image}
            isLoaded={isLoaded}
          />
          <CVCard selectedColor={selectedColor} cv={cv} isLoaded={isLoaded} />
          <ConnectCard selectedColor={selectedColor} isLoaded={isLoaded} />
          <CurrentTimeCard selectedColor={selectedColor} isLoaded={isLoaded} />
          <AvailableNowCard selectedColor={selectedColor} isLoaded={isLoaded} />
          <ColorPickerCard
            selectedColor={selectedColor}
            handleColorChange={handleColorChange}
            isLoaded={isLoaded}
          />
          <ContactFormCard
            selectedColor={selectedColor}
            buttonTextColor={buttonTextColor}
            darkenColor={darkenColor}
            formRef={formRef}
            sendEmail={sendEmail}
            isLoaded={isLoaded}
          />
          <FooterCard selectedColor={selectedColor} isLoaded={isLoaded} />
        </div>
      )}
    </div>
  );
};

export default Dashboard;
