// src/components/Dashboard.js
import React from 'react';

  /*
  Call to action buttons stand out
  My current time
  Contact
  Links
  Examples
  About
  Avaliability
  Random game/customisation on my site so they can play around
  Some credits to give frame
  Make it like your personal space that a client can enter - business card
  CV

  have an animated background based on the current season
  have a toggle light/dark mode
  animated cursor
  */

const Dashboard = () => {

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="grid grid-cols-5 grid-rows-6 gap-4 w-3/4 h-3/4 p-4 bg-white rounded-lg">
        <div className="col-span-4 row-span-3 bg-blue-200 flex items-center justify-center">BASIC INFO + LINKS</div>
        <div className="row-span-5 col-start-5 bg-red-200 flex items-center justify-center">About</div>
        <div className="col-start-4 row-start-4 bg-green-200 flex items-center justify-center"> Avaliability</div>
        <div className="col-span-2 row-span-2 col-start-2 row-start-4 bg-yellow-200 flex items-center justify-center">Work showoff </div>
        <div className="row-span-3 col-start-1 row-start-4 bg-purple-200 flex items-center justify-center">Contact</div>
        <div className="col-start-4 row-start-5 bg-pink-200 flex items-center justify-center">My current time</div>
        <div className="col-span-2 col-start-3 row-start-6 bg-indigo-200 flex items-center justify-center">Some credits to give frame</div>
        <div className="col-start-2 row-start-6 bg-gray-200 flex items-center justify-center">Random game/customisation on my site so they can play around</div>
        <div className="col-start-5 row-start-6 bg-orange-200 flex items-center justify-center">CV</div>
      </div>
    </div>
  );
};

export default Dashboard;
