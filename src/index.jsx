// Dependencias.
import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./components/App/Index.jsx";

// Estilos.
import "./styles/global.css";
import "./styles/colors.css";
import "./styles/fonts.css";

// Renderizado.
const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
