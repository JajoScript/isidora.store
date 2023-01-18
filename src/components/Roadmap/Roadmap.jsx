// Dependencias.
import React from "react";
import Image from "next/image";
import RoadMapImg from "../../assets/images/isidora.store.png";

// Estilos.
import Styles from "./Roadmap.module.css";

// Definición del componente: <Roadmap />
const Roadmap = (props) => {
  // 1. Manejo del estado.
  // 2. Ciclo de vida.
  // 3. Metodos.
  // 4. Render.
  return (
    <div className={Styles.container}>
      <h1 className={Styles.title}>Welcome to Isidora store</h1>
      <p className={Styles.subTitle}>work in progress</p>

      <Image src={RoadMapImg} alt="roadmap" className={Styles.image} />
    </div>
  );
};

// Proptypes.
Roadmap.proptypes = {};

// Exportación.
export default Roadmap;
