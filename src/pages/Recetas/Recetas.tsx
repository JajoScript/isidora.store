// Dependencias.
import React from "react";
import { motion } from "framer-motion";
import { IoIosHammer } from "react-icons/io";

// Estilos.
import "./Recetas.styles.css";

// Props.
interface Props {}

// Definición del componente: <RecetasPage />
const RecetasPage = (props: Props) => {
  // 1. Manejo del estado.
  const {} = props;

  // 2. Ciclo de vida.
  // 3. Metodos.
  // 4. Render
  return (
    <section className="RecetasPage">
      <motion.div
        animate={{
          rotate: [0, 50, 0, -50, 0],
        }}
        transition={{
          repeat: Infinity,
        }}
      >
        <IoIosHammer className="RecetasPage_icon" />
      </motion.div>

      <p className="RecetasPage_title">Recetas</p>
      <p className="RecetasPage_badge">En desarrollo</p>
    </section>
  );
};

// Proptypes.
RecetasPage.propTypes = {};

// Exportación.
export default RecetasPage;
