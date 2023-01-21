// Dependencias
import React from "react";
import IsidoraStoreImg from "../../assets/images/icon.svg";

// Estilos.
import "./Index.css";

// Definición del componente: <Navbar />
function Navbar(props) {
  // 1. Manejo de estado.
  const {} = props;

  // 2. Ciclo de vida.
  // 3. Metodos.
  // 4. Render
  return (
    <React.Fragment>
      <div className="NavbarContainer">
        {/* Icon Container */}
        <div>
          <img
            className="NavbarContainer_image"
            src={IsidoraStoreImg}
            alt="Isidora Store"
          />
        </div>

        {/* Banner title */}
        <h1 className="NavbarContainer_title">Isidora store</h1>

        {/* Nav Routes */}
        <div className="NavbarContainer_routesContainer">
          <p className="NavbarContainer_route">Inicio</p>
          <p className="NavbarContainer_route">Recetas</p>
          <p className="NavbarContainer_route">FAQ</p>
        </div>
      </div>
    </React.Fragment>
  );
}

// Exportación.
export default Navbar;
