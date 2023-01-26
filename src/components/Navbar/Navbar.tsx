// Dependencias.
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import { routes } from "../../schemas/routes";
const Logo = "../../assets/icons/logo_border_dark.svg";

// Estilos.
import "./Navbar.styles.css";

// Props.
interface Props {}

// Definición del componente: <Navbar />.
const Navbar = (props: Props) => {
  // 1. Manejo del estado.
  const {} = props;
  const navigate = useNavigate();

  // 2. Ciclo de vida.
  // 3. Metodos.
  const handleNavigate = (route: string) => {
    navigate(route);
  };
  // 4. Render.
  return (
    <div className="NavbarContainer">
      {/* Brand */}
      <div className="NavbarContainer_brandContainer">
        <img src={Logo} className="NavbarContainer_brandContainer-icon" />
        <h1>Isidora store</h1>
      </div>

      {/* Links */}
      <div className="NavbarContainer_linksContainer">
        <button
          className="NavbarContainer_linksContainer-btn"
          onClick={() => handleNavigate(routes.INDEX)}
        >
          Inicio
        </button>
        <button
          className="NavbarContainer_linksContainer-btn"
          onClick={() => handleNavigate(routes.RECETAS)}
        >
          Recetas
        </button>
        <button
          className="NavbarContainer_linksContainer-btn"
          onClick={() => handleNavigate(routes.FAQ)}
        >
          FAQ
        </button>
      </div>
    </div>
  );
};

// Proptypes.
Navbar.propTypes = {};

// Exportación.
export default Navbar;
