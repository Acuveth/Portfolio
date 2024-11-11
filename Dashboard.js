import React, { useRef, useEffect, useState } from "react";
import "../Dashboard.css";
import backgroundVideo from "../Assets/video2.mp4";
import Clock from "./Clock";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const videoRef = useRef(null);
  const [selectedColor, setSelectedColor] = useState("blue"); // Default color
  
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
    <div className="flex items-center justify-center h-screen relative">
      {/* Background Video */}
      <div className="video-wrapper absolute top-0 left-0 w-full h-full z-0">
        <video ref={videoRef} autoPlay loop muted className="w-full h-full object-cover">
          <source src={backgroundVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Color Overlay */}
      <div className="overlay absolute top-0 left-0 w-full h-full bg-gray-900 z-10"></div>

      {/* Main Content */}
      <div className="grid grid-cols-5 grid-rows-6 gap-4 w-3/4 h-3/4 p-4 rounded-xl z-20 relative">
        
        {/* Example Div with Dynamic Hover Border Color */}
        <div
          className="col-span-4 row-span-3 flex flex-col justify-between rounded-xl border border-gray-300 p-4"
          style={{
            borderColor: "gray",
            transition: "border-color 0.1s ease",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.borderColor = selectedColor)}
          onMouseLeave={(e) => (e.currentTarget.style.borderColor = "gray")}
        >
          {/* Main Content: Basic Info + Links */}
          <div className="flex flex-row justify-between w-full h-full text-white">
            <div className="flex flex-col flex-grow" style={{
            borderColor: "gray",
            transition: "border-color 0.1s ease",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.borderColor = selectedColor)}
          onMouseLeave={(e) => (e.currentTarget.style.borderColor = "gray")}>

            <div className="italic text-sm text-gray-500">welcome</div>
              
              <div className="mt-3">Additional information or description goes here</div>
            </div>
            {/* Photo Holder */}
            <div className="w-1/4 h-full flex items-center justify-center bg-gray-300 rounded-xl ml-4">
              <img src="/path-to-photo.jpg" alt="Profile" className="w-full h-full object-cover rounded-xl" />
            </div>
          </div>
          {/* Buttons Row at the Bottom */}
          <div className="flex space-x-4 mt-4">
            <button className="bg-blue-500 text-white px-4 py-2 rounded-xl hover:bg-blue-600"    
             style={{ backgroundColor: selectedColor }}
             onMouseEnter={(e) => e.currentTarget.style.backgroundColor = darkenColor(selectedColor, 0.1)}
             onMouseLeave={(e) => e.currentTarget.style.backgroundColor = selectedColor}
           >
            Button 1
          
          </button>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-xl hover:bg-blue-600"    

            style={{ backgroundColor: selectedColor }}
             onMouseEnter={(e) => e.currentTarget.style.backgroundColor = darkenColor(selectedColor, 0.1)}
             onMouseLeave={(e) => e.currentTarget.style.backgroundColor = selectedColor}>Button 2</button>
          </div>
        </div>

        {/* Other Divs */}
        <div className="row-span-5 col-start-5 bg-gray-900 flex items-center justify-center rounded-xl border border-gray-300 text-white" style={{
            borderColor: "gray",
            transition: "border-color 0.1s ease",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.borderColor = selectedColor)}
          onMouseLeave={(e) => (e.currentTarget.style.borderColor = "gray")}>
          About
        </div>

        {/* Available Now Status */}
        <div className="col-start-4 row-start-4 bg-gray-900 flex items-center justify-center rounded-xl border border-gray-300 text-white font-thin" style={{
            borderColor: "gray",
            transition: "border-color 0.1s ease",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.borderColor = selectedColor)}
          onMouseLeave={(e) => (e.currentTarget.style.borderColor = "gray")}>
          <span className="blinking-light"></span> Available Now
        </div>

        {/* Link to My Work */}
        <Link to="/my-work" className="col-span-2 row-span-2 col-start-2 row-start-4 bg-gray-900 rounded-xl border border-gray-300 flex text-white text-xl font-semibold px-6 py-4" style={{
            borderColor: "gray",
            transition: "border-color 0.1s ease",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.borderColor = selectedColor)}
          onMouseLeave={(e) => (e.currentTarget.style.borderColor = "gray")}>
          Work Showoff
        </Link>

        {/* Contact Info */}
        <div className="row-span-3 col-start-1 row-start-4 bg-gray-900 flex flex-col px-8 justify-center rounded-xl border border-purple-900 text-white" style={{
            borderColor: "gray",
            transition: "border-color 0.1s ease",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.borderColor = selectedColor)}
          onMouseLeave={(e) => (e.currentTarget.style.borderColor = "gray")}>
          Let's connect!
          <p>Email:</p>
          <p>lukagaberscek3@gmail.com</p>
          <p>Socials:</p>
          <p>GitHub</p>
          <p>Linkedin</p>
        </div>

        {/* Clock */}
        <div className="col-start-4 row-start-5 bg-gray-900 flex items-center justify-center rounded-xl border border-gray-300 text-white" style={{
            borderColor: "gray",
            transition: "border-color 0.1s ease",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.borderColor = selectedColor)}
          onMouseLeave={(e) => (e.currentTarget.style.borderColor = "gray")}>
          <Clock />
        </div>

        {/* Credits */}
        <div className="col-span-2 col-start-3 row-start-6 bg-gray-900 flex items-center justify-center rounded-xl border border-gray-300 text-white text-sm" style={{
            borderColor: "gray",
            transition: "border-color 0.1s ease",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.borderColor = selectedColor)}
          onMouseLeave={(e) => (e.currentTarget.style.borderColor = "gray")}>
          © 2024 · 
        </div>

        {/* Circular Color Selection Buttons */}
        <div className="col-start-2 row-start-6 bg-gray-900 flex flex-col items-center justify-center rounded-xl border border-gray-300 p-4 space-y-4" style={{
            borderColor: "gray",
            transition: "border-color 0.1s ease",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.borderColor = selectedColor)}
          onMouseLeave={(e) => (e.currentTarget.style.borderColor = "gray")}>
          <div className="flex flex-row space-x-4">
            <button
              onClick={() => handleColorChange("blue")}
              className="bg-blue-500 w-12 h-12 rounded-full hover:bg-blue-600"
            ></button>
            <button
              onClick={() => handleColorChange("green")}
              className="bg-green-500 w-12 h-12 rounded-full hover:bg-green-600"
            ></button>
            <button
              onClick={() => handleColorChange("red")}
              className="bg-red-500 w-12 h-12 rounded-full hover:bg-red-600"
            ></button>
            <button
              onClick={() => handleColorChange("purple")}
              className="bg-purple-500 w-12 h-12 rounded-full hover:bg-purple-600"
            ></button>
          </div>
        </div>

        {/* CV Link */}
        <div className="col-start-5 row-start-6 bg-gray-900 flex items-center justify-center rounded-xl border border-gray-300 text-white" style={{
            borderColor: "gray",
            transition: "border-color 0.1s ease",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.borderColor = selectedColor)}
          onMouseLeave={(e) => (e.currentTarget.style.borderColor = "gray")}>
          <a href="/cv.pdf" target="_blank" rel="noopener noreferrer" className="w-full h-full flex px-6 py-4 text-xl font-semibold">
            CV
          </a>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
