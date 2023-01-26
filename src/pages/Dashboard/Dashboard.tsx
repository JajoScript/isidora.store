// Dependencias.
import React from "react";
import { motion } from "framer-motion";
import { IoIosHammer } from "react-icons/io";

// Estilos.
import "./Dashboard.styles.css";

// Props
interface Props {}

// Definición del componente: <DashboardPage />
const DashboardPage = (props: Props) => {
  // 1. Manejo del estado.
  const {} = props;

  // 2. Ciclo de vida.
  // 3. Metodos.
  // 4. Render
  return (
    <section className="DashboardPage">
      <motion.div
        animate={{
          rotate: [0, 50, 0, -50, 0],
        }}
        transition={{
          repeat: Infinity,
        }}
      >
        <IoIosHammer className="DashboardPage_icon" />
      </motion.div>

      <p className="DashboardPage_title">DASHBOARD</p>
      <p className="DashboardPage_badge">En desarrollo</p>
    </section>
  );
};

// Proptypes.
DashboardPage.propTypes = {};

// Exportación.
export default DashboardPage;
