// Dependencias.
import React from "react";
import { Routes, Route } from "react-router-dom";
import IndexContainer from "../../containers/Index";

// Definición del componente: <App />
function App(props) {
  // 1. Manejo del estado.
  // 2. Ciclo de vida.
  // 3. Metodos.
  // 4. Render.
  return (
    <React.Fragment>
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
