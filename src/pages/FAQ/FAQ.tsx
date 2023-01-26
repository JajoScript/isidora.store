// Dependencias.
import React from "react";
import { motion } from "framer-motion";
import { IoIosHammer } from "react-icons/io";

// Estilos.
import "./FAQ.styles.css";

// Props.
interface Props {}

// Definición del componente: <FAQPage />
const FAQPage = (props: Props) => {
  // 1. Manejo del estado.
  const {} = props;

  // 2. Ciclo de vida.
  // 3. Metodos.
  // 4. Render
  return (
    <section className="FAQPage">
      <motion.div
        animate={{
          rotate: [0, 50, 0, -50, 0],
        }}
        transition={{
          repeat: Infinity,
        }}
      >
        <IoIosHammer className="FAQPage_icon" />
      </motion.div>

      <p className="FAQPage_title">FAQ</p>
      <p className="FAQPage_badge">En desarrollo</p>
    </section>
  );
};

// Proptypes.
FAQPage.propTypes = {};

// Exportación.
export default FAQPage;
