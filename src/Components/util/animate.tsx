import { Variants } from "framer-motion";

export const reveal: Variants = {
  hiddenVariant: { opacity: 0 },
  revealedVariant: {
    // backgroundColor: "rgb(187, 215, 237)",
    opacity: 1,
    transition: {
      type: "spring",
    },
  },
};
