// Dependencias.
import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./components/App/App";

// Estilos.
import "./styles/colors.css";
import "./styles/fonts.css";
import "./styles/media.css";
import "./styles/reset.css";
import "./styles/others.css";
import "./styles/global.css";

// Render
const container = document.getElementById("root") as HTMLElement;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
