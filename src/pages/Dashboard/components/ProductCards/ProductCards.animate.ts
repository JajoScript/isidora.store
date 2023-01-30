// Dependencias.
import { Variants } from "framer-motion";

const ProductCardsAnimate: Variants = {
  hidden: (index: number) => ({
    opacity: 0,
    y: -50 * index,
  }),
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: index * 0.5,
    },
  }),
};

export default ProductCardsAnimate;
