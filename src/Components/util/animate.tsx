import { Variants } from "framer-motion";

export const reveal: Variants = {
  hiddenVariant: { opacity: 0 },
  revealedVariant: {
    opacity: [0, 1],
    x: [-50, 0],
    transition: {
      type: "spring",
    },
  },
};
