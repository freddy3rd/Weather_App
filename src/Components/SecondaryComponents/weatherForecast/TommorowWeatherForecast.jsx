import { motion } from "framer-motion";
import { reveal } from "../../util/animate";

import {
  converTimeStampToTime,
  convertUnixTimestamp,
} from "../TimeDateManipulation/TimeDateManipulation";

import { weatherIcon } from "../weatherIcon/Icons";

export const _tommorow_WeatherForecast = (data) => {
  if (data) {
    return (
      <motion.div
        variants={reveal}
        key={crypto.randomUUID()}
        className="h-full w-full overflow-hidden"
      >
        <div className="bg-[#aecae0] h-full w-full rounded-xl relative p-4 grid grid-cols-[max-content_1fr_1fr] gap-2 text-black">
          <div className="text-center md:row-span-3 md:row-start-1 row-start-2 self-center">
            {weatherIcon(data.weather[0].main, "text-9xl whitespace-nowrap ")}
            <p className="font-bold text-2xl">{data.weather[0].main}</p>
          </div>
          <div className=" col-span-2 self-end flex">
            <h1></h1>
            <h1 className="text-4xl font-bold">
              {convertUnixTimestamp(data.dt)}
              <span className="text-[12px]">
                {converTimeStampToTime(data.dt)}
              </span>
            </h1>
          </div>
          <div className=" row-span-2 col-span-2 grid xl:grid-cols-4 md:grid-cols-3 grid-cols-1 px-2 text-[14px]">
            <motion.li className="whitespace-nowrap" variants={reveal}>
              Humidity: <b>{`${data.main.humidity}\u00B0C | \u00B0F`}</b>
            </motion.li>
            <motion.li variants={reveal}>
              Feels Like: <b>{data.main.feels_like}</b>
            </motion.li>
            <motion.li variants={reveal}>
              Pressure: <b>{data.main.pressure}MB</b>
            </motion.li>
            <motion.li className="whitespace-nowrap " variants={reveal}>
              Temperature: <b>{data.wind.speed} mph</b>
            </motion.li>
            <motion.li className="whitespace-nowrap " variants={reveal}>
              Temp Max.: <b>{data.wind.speed} mph</b>
            </motion.li>
            <motion.li className="whitespace-nowrap " variants={reveal}>
              Temp Min.: <b>{data.wind.speed} mph</b>
            </motion.li>
            <motion.li className="whitespace-nowrap " variants={reveal}>
              Sea Level: <b>{data.wind.speed} mph</b>
            </motion.li>
            <motion.li className="whitespace-nowrap " variants={reveal}>
              Ground Level: <b>{data.wind.speed} mph</b>
            </motion.li>
            <motion.li className="whitespace-nowrap " variants={reveal}>
              Wind Speed: <b>{data.wind.speed} mph</b>
            </motion.li>
            <motion.li className="whitespace-nowrap " variants={reveal}>
              Gust: <b>{data.wind.speed} mph</b>
            </motion.li>
            <motion.li className="whitespace-nowrap " variants={reveal}>
              Deg: <b>{data.wind.speed} mph</b>
            </motion.li>
          </div>
        </div>
      </motion.div>
    );
  }
};
