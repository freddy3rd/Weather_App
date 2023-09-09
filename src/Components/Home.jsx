import React from "react";
import WeatherCalendar from "./MainComponents/WeatherCalendar";
import "./stylesheets/searchBar.css";

import Navigation from "./Navigation";

function Home() {
  return (
    <div className="flex flex-col items-center w-full h-screen justify-center px-4">
      <div className="flex flex-col gap-4 w-full max-w-[1200px ] shadow-lg p-5 rounded-md">
        <Navigation />
        <WeatherCalendar />
      </div>
    </div>
  );
}

export default Home;
