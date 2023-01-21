// Dependencias.
import React from "react";
import { Routes, Route } from "react-router-dom";
import IndexContainer from "../../containers/Index/IndexContainer.jsx";
import Navbar from "../../components/Navbar/Index.jsx";

// Definición del componente: <App />
function App(props) {
  // 1. Manejo del estado.
  // 2. Ciclo de vida.
  // 3. Metodos.
  // 4. Render.
  return (
    <React.Fragment>
      <Navbar />

      <Routes>
        <Route path="/" element={<IndexContainer />} />
      </Routes>
    </React.Fragment>
  );
}

// Proptypes.
App.propTypes = {};

// Exportación.
export default App;
