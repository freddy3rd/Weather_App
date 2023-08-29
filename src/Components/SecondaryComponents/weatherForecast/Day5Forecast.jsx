import { motion } from "framer-motion";
import { reveal } from "../../util/animate";
import { useState } from "react";
import {
  converTimeStampToTime,
  convertUnixTimestamp,
} from "../TimeDateManipulation/TimeDateManipulation";

import { weatherIcon } from "../weatherIcon/Icons";

export const Next5Days = (data, isOpen, setIsOpen, activeDay, setActiveDay) => {
  if (data) {
    return data.map((data, index) => (
      <>
        <motion.div
          key={data.dt}
          variants={reveal}
          layoutId={data.dt}
          onClick={() => {
            setIsOpen(!isOpen);
            setActiveDay(data.dt);
          }}
          className={`${
            isOpen && data.dt === activeDay
              ? "md:w-[30%] w-[100%] absolute"
              : ""
          } flex flex-col items-center grow text-white rounded-xl relative h-screen max-h-52 overflow-hidden hover:cursor-pointer`}
        >
          <div
            className={`bg-[#aecae0] w-full text-center p-3 ff-cinzel ${
              isOpen && data.dt === activeDay
                ? "text-black flex justify-between"
                : " text-slate-100 bg-[#313131]"
            }`}
          >
            <motion.h1
              key={data.dt}
              layout="position"
              className="text-[1rem] relative font-semibold"
            >
              {isOpen && data.dt === activeDay
                ? convertUnixTimestamp(data.dt)
                : convertUnixTimestamp(data.dt).slice(0, 3)}
              <hr className="w-full" />
            </motion.h1>
            <h1
              className={`text-black text-[1rem] ff-cinzel ${
                isOpen && data.dt === activeDay ? "" : "hidden"
              }`}
            >
              {converTimeStampToTime(data.dt)}
            </h1>
          </div>
          <motion.div
            animate={
              isOpen && activeDay === data.dt
                ? {
                    backgroundColor: "rgb(187, 215, 237)",
                    justifyContent: "center",
                    color: "rgb(0,0,0)",
                    alignItems: "start",
                    paddingInline: "20px",
                    transition: { ease: "easeInOut" },
                  }
                : {
                    backgroundColor: "rgb(49, 49, 49)",
                    alignItems: "center",
                    justifyContent: "center",
                  }
            }
            className={`h-full w-full flex md:flex-col flex-row-reverse `}
          >
            {weatherIcon(
              data.weather[0].main,
              `md:text-6xl text-8xl ${
                isOpen &&
                data.dt === activeDay &&
                "absolute top-12 right-16 md:text-8xl text-8xl "
              }`
            )}
            {/* <span className={`md:text-[13px] font-bold capitalize `}>
              {data.weather[0].description}
            </span> */}
            <motion.h1
              layout="position"
              className="md:text-4xl text-2xl mt-3 font-bold ff-cinzel relative flex flex-col text-center"
            >
              {`${data.wind.deg}\u00B0`}
            </motion.h1>
          </motion.div>
          {isOpen && data.dt === activeDay && (
            <motion.div
              animate={{ backgroundColor: "rgb(187, 215, 237)" }}
              className="w-full text-black px-2 flex   "
            >
              <motion.div
                variants={reveal}
                initial="hiddenVariant"
                animate="revealedVariant"
                transition={{
                  ease: "easeIn",
                  type: "tween",
                  staggerChildren: 0.2,
                  duration: 0.5,
                  delayChildren: 0.2 + 0.3,
                }}
                className="grid grid-cols-2  w-full p-3 md:text-md"
              >
                <motion.p variants={reveal}>
                  Feels Like: <b>{data.main.feels_like}</b>
                </motion.p>

                <motion.p
                  className=" whitespace-nowrap text-end"
                  variants={reveal}
                >
                  Wind Speed: <b>{data.wind.speed} mph</b>
                </motion.p>

                <motion.p variants={reveal}>
                  Pressure: <b>{data.main.pressure}MB</b>
                </motion.p>

                <motion.p
                  className=" whitespace-nowrap text-end"
                  variants={reveal}
                >
                  Humidity: <b>{`${data.main.humidity}\u00B0C | \u00B0F`}</b>
                </motion.p>
              </motion.div>
            </motion.div>
          )}
        </motion.div>
      </>
    ));
  }
};
