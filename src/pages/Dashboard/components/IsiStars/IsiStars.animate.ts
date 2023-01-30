// Dependencias.
import { Variants } from "framer-motion";

const IsiStarsAnimate: Variants = {
  hidden: (index: number) => ({
    opacity: 0,
    x: index % 2 === 0 ? -50 : 50,
  }),
  visible: (index: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: index * 0.25,
    },
  }),
};

export default IsiStarsAnimate;
