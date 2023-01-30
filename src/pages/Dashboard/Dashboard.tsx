// Dependencias.
import ProductCards from "./components/ProductCards/ProductCards";

// Estilos.
import "./Dashboard.styles.css";

// Props
interface Props {}

// Definición del componente: <DashboardPage />
const DashboardPage = (props: Props) => {
  // 1. Manejo del estado.
  const {} = props;

  // 2. Ciclo de vida.
  // 3. Metodos.
  // 4. Render
  return (
    <section className="DashboardPage">
      {/* Product cards. */}
      <div className="DashboardPage_container">
        <ProductCards />
      </div>
    </section>
  );
};

// Proptypes.
DashboardPage.propTypes = {};

// Exportación.
export default DashboardPage;
