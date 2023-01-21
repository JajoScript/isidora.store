// Dependencias.
import React from "react";
import { motion } from "framer-motion";
import { IoIosHammer } from "react-icons/io";

// Estilos.
import "./IndexPage.css";

// Definición del contendor: <IndexPage />.
function IndexPage(props) {
  // 1. Manejo de estado.
  const {} = props;

  // 2. Ciclo de vida.
  // 3. Metodos.
  // 4. Render
  return (
    <div className="IndexPage_container">
      {/* Banner */}
      <div className="IndexPage_bannerContainer">
        {/* TEST */}
        <motion.div
          animate={{
            rotate: [0, 50, 0, -50, 0],
          }}
          transition={{
            repeat: Infinity,
          }}
        >
          <IoIosHammer className="IndexPage_icon" />
        </motion.div>

        <h1 className="IndexPage_Title">Sitio en desarrollo</h1>
      </div>
    </div>
  );
}

// Exportación.
export default IndexPage;
