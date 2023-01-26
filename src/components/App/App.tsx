// Dependencias.
import React from "react";
import { Routes, Route } from "react-router-dom";
import DashBoardContainer from "../../containers/Dashboard/Dashboard";
import FAQContainer from "../../containers/FAQ/FAQ";
import RecetasContainer from "../../containers/Recetas/Recetas";

// Estilos.
// ...

// Definición del componente: <App />.
function App(props: any) {
  // 1. Manejo del estado.
  // 2. Ciclo de vida.
  // 3. Metodos.
  // 4. Render
  return (
    <React.Fragment>
      <Routes>
        <Route path="/" element={<DashBoardContainer />} />
        <Route path="/recetas" element={<RecetasContainer />} />
        <Route path="/faq" element={<FAQContainer />} />
      </Routes>
    </React.Fragment>
  );
}

// Exportación.
export default App;
