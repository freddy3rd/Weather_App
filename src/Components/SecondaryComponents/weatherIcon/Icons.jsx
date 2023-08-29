import { motion } from "framer-motion";
import { WiDaySunny, WiCloudy, WiDayRain } from "react-icons/wi";

export const weatherIcon = (data, style) => {
  switch (data) {
    case "Rain":
      return (
        <motion.span layout="position " className={style}>
          <WiDayRain />
        </motion.span>
      );

    case "Clouds":
      return (
        <motion.span layout="position " className={style}>
          <WiCloudy />
        </motion.span>
      );

    default:
      return (
        <motion.span layout="position " className={style}>
          <WiDaySunny />
        </motion.span>
      );
  }
};
