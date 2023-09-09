import { motion, AnimatePresence } from "framer-motion";
import React, { useContext, useEffect, useState } from "react";
import { reveal } from "../util/animate";
import WeatherContext from "../Context/WeatherContext";
import { Next5Days } from "../SecondaryComponents/weatherForecast/Day5Forecast";
import { WeatherForecast } from "../SecondaryComponents/weatherForecast/TodayWeatherForecast";
import { FaBell, FaMapMarkerAlt } from "react-icons/fa";
import { getSelectedDataWithinDateRange } from "../SecondaryComponents/TimeDateManipulation/TimeDateManipulation";
import { _tommorow_WeatherForecast } from "../SecondaryComponents/weatherForecast/TommorowWeatherForecast";

function WeatherCalendar() {
  const { getWeather, location } = useContext(WeatherContext);
  const [weather, setWeather] = useState([]);

  const [selectedNav, setSelectedNav] = useState("Today");

  const [isOpen, setIsOpen] = useState(false);
  const [activeDay, setActiveDay] = useState(null);

  useEffect(() => {
    getWeather().then((response) => {
      const filteredData = getSelectedDataWithinDateRange(response.list);
      if (filteredData) setWeather([...filteredData]);
      return response;
    });
  }, [location]);

  return (
    <>
      <div className="flex justify-between py-4 items-center">
        <h2 className="text-xl text-slate-50  font-semibold flex gap-2 items-center">
          <FaMapMarkerAlt />
          {location}
        </h2>

        <div className="flex gap-1">
          <button
            onClick={() => {
              setSelectedNav("Today");
            }}
            className={`px-5 py-1 rounded-2xl text-slate-50 font-semibold ${
              selectedNav === "Today" ? "bg-slate-200 text-slate-900" : ""
            }`}
          >
            Today
          </button>
          <button
            onClick={() => setSelectedNav("Tommorow")}
            className={`px-5 py-1 rounded-2xl text-slate-50 font-semibold ${
              selectedNav === "Tommorow" ? "bg-slate-200 text-slate-900" : ""
            }`}
          >
            Tomorrow
          </button>
          <button
            onClick={() => setSelectedNav("Next Days")}
            className={`px-5 py-1 rounded-2xl text-slate-50 font-semibold whitespace-nowrap hidden md:block ${
              selectedNav === "Next Days" ? "bg-slate-200 text-slate-900" : ""
            }`}
          >
            Next 5 Days
          </button>
        </div>
      </div>
      <AnimatePresence>
        <motion.div
          variants={reveal}
          initial="hiddenVariant"
          animate="revealedVariant"
          transition={{
            ease: "easeIn",
            staggerChildren: 0.2,
            duration: 0.8,
            delayChildren: 0.2 + 1,
          }}
          className="flex justify-evenly gap-3 w-full overflow-x-hidden md:h-52 h-[max-content] col-span-2 "
        >
          {selectedNav === "Next Days" &&
            Next5Days(weather, isOpen, setIsOpen, activeDay, setActiveDay)}
          {selectedNav === "Today" && WeatherForecast(weather[0])}
          {selectedNav === "Tommorow" && _tommorow_WeatherForecast(weather[1])}
        </motion.div>
      </AnimatePresence>
    </>
  );
}

export default WeatherCalendar;
