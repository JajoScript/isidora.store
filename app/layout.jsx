// Dependencias.
import React from "react";
import { Poppins } from "@next/font/google";

// Estilos.
import "./global.css";

// Fuentes.
const poppins = Poppins({
  weight: ["400", "600"],
  subsets: ["latin"],
  display: "optional",
});

// Definición del contendor: https://isidora.store/
const IndexLayout = (props) => {
  // 1. Manejo del estado.
  const { children } = props;

  // 2. Ciclo de vida.
  // 3. Metodos.
  // 4. Render.
  return (
    <html lang="es" className={poppins.className}>
      <head />
      <body>{children}</body>
    </html>
  );
};

// Exportación.
export default IndexLayout;
