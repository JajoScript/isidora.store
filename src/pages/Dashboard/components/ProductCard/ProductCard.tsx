// Dependencias.
import { Product } from "../../../../models/types/Product";
import { ProductStore } from "../../../../models/types/ProductStore";

// Estilos.
import "./ProductCard.styles.css";

// Props.
interface Props {
  product: ProductStore;
}

// Definición del componente: <ProductCards />
const ProductCard = (props: Props) => {
  // 1. Manejo del estado.
  const { product } = props;

  // 2. Ciclo de vida.
  // 3. Metodos.
  // 4. Render
  console.log("in ProductCard: ", product);
  return (
    <div className="ProductCard_container">
      {/* Product image */}
      <div className="ProductCard_imageContainer">
        <img src="" alt="image src" className="ProductCard-image" />
      </div>

      {/* Product info */}
      <div>
        <p>Product info</p>
      </div>
    </div>
  );
};

// Exportación.
export default ProductCard;
