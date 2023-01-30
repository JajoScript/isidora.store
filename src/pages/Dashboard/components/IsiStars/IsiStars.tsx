// Dependencias.
import { AnimatePresence, motion } from "framer-motion";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { IsidorasRate } from "../../../../models/types/IsidorasRate";
import IsiStarsAnimate from "./IsiStars.animate";

// Estilos.
import "./IsiStars.styles.css";

// Props.
interface Props {
  isidorasRate: IsidorasRate;
}

// Definición del componente: <IsiStarss />
const IsiStars = (props: Props) => {
  // 1. Manejo del estado.
  const { isidorasRate } = props;

  // 2. Ciclo de vida.
  // 3. Metodos.
  const mappingStars = () => {
    const starsArray = [];
    let stars = isidorasRate.stars;

    for (let i = 0; i < 5; i++) {
      if (stars > 0) {
        starsArray.push(
          <AiFillStar className="IsiStars_starsContainer-star" />
        );
        stars--;
      } else {
        starsArray.push(
          <AiOutlineStar className="IsiStars_starsContainer-star" />
        );
      }
    }

    return starsArray.map((star, index) => {
      return (
        <motion.div
          key={index}
          variants={IsiStarsAnimate}
          initial="hidden"
          animate="visible"
          custom={index}
        >
          {star}
        </motion.div>
      );
    });
  };

  // 4. Render
  return (
    <div className="IsiStars_container">
      {/* Stars */}
      <div className="IsiStars_starsContainer">
        <AnimatePresence>{mappingStars()}</AnimatePresence>
      </div>

      {/* Comentario */}
      <div className="IsiStars_commentContainer">
        <p className="IsiStars_commentContainer-comment">
          "{isidorasRate.comment}" - Isi
        </p>
      </div>
    </div>
  );
};

// Exportación.
export default IsiStars;
