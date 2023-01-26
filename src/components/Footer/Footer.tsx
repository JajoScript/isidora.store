// Dependencias.
import React from "react";
import { FaInstagram, FaFacebookF, FaSpotify, FaTwitter } from "react-icons/fa";

// Estilos.
import "./Footer.styles.css";

// Props.
interface Props {}

// Definición del componente: <Footer />.
const Footer = (props: Props) => {
  // 1. Manejo del estado.
  const {} = props;

  // 2. Ciclo de vida.
  // 3. Metodos.
  // 4. Render.
  return (
    <div className="FooterContainer">
      {/* Texto */}
      <div className="FooterContainer_textContainer">
        <p>Isidora.store 2022 © 2022</p>
      </div>

      {/* Quote */}
      <div className="FooterContainer_QuoteContainer">
        <p>
          "Sitio destinado en hacer más facil la vida de mi amada Isidora." -
          Jajo.
        </p>
      </div>

      {/* Redes sociales. */}
      <div className="FooterContainer_RRSSContainer">
        <FaInstagram className="FooterContainer_RRSSContainer-icon" />
        <FaFacebookF className="FooterContainer_RRSSContainer-icon" />
        <FaSpotify className="FooterContainer_RRSSContainer-icon" />
        <FaTwitter className="FooterContainer_RRSSContainer-icon" />
      </div>
    </div>
  );
};

// Proptypes.
Footer.propTypes = {};

// Exportación.
export default Footer;
