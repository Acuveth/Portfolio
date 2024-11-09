// src/components/Clock.js
import React, { useState, useEffect } from "react";

const Clock = () => {
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateClock = () => {
      const currentTime = new Date();
      const formattedTime = new Intl.DateTimeFormat("en-US", {
        hour: "numeric",
        minute: "numeric",
        hour12: true,
        timeZone: "Europe/Paris",
      }).format(currentTime);
      setTime(formattedTime);
    };

    updateClock(); // Initial call
    const intervalId = setInterval(updateClock, 1000); // Update every second

    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, []);

  return <div className="text-3xl font-semibold font-firacode">{time}</div>;
};

export default Clock;
