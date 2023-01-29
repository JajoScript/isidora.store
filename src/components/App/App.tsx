// Dependencias.
import React from "react";
import { Routes, Route } from "react-router-dom";
import DashBoardContainer from "../../containers/Dashboard/Dashboard";
import FAQContainer from "../../containers/FAQ/FAQ";
import RecetasContainer from "../../containers/Recetas/Recetas";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

// Estilos.
import "./App.styles.css";

// Props.
interface Props {}

// Definición del componente: <App />.
function App(props: Props) {
  // 1. Manejo del estado.
  // 2. Ciclo de vida.
  // 3. Metodos.
  // 4. Render
  return (
    <section className="App_container">
      <Navbar />

      <Routes>
        <Route path="/" element={<DashBoardContainer />} />
        <Route path="/recetas" element={<RecetasContainer />} />
        <Route path="/faq" element={<FAQContainer />} />
      </Routes>

      <Footer />
    </section>
  );
}

// Exportación.
export default App;
