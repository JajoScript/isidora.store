// Dependencias.
import { Product } from "../../../../models/types/Product";
import { ProductStore } from "../../../../models/types/ProductStore";
import IsiStars from "../IsiStars/IsiStars";
import BrandsDisplay from "../BrandsDisplay/BrandsDisplay";

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
  const { isidorasRate, productInfo, stores } = product;

  // 2. Ciclo de vida.
  // 3. Metodos.
  // 4. Render
  return (
    <div className="ProductCard_container">
      {/* Header: Image, basic info */}
      <div className="ProductCard_headerContainer">
        {/* Product image */}
        <div className="ProductCard_imageContainer">
          <img
            src={productInfo.image}
            alt="image src"
            loading="lazy"
            className="ProductCard-image"
          />
        </div>

        {/* Product basic info */}
        <div className="ProductCard_infoContainer">
          <p className="ProductCard_infoContainer-name">{productInfo.name}</p>
          <p className="ProductCard_infoContainer-brand">{productInfo.brand}</p>
          <p className="ProductCard_infoContainer-price">
            ${productInfo.price}
          </p>
        </div>
      </div>

      {/* Body: brand info */}
      <div className="ProductCard_bodyContainer">
        <IsiStars isidorasRate={isidorasRate} />
        <BrandsDisplay stores={stores} />
      </div>
    </div>
  );
};

// Exportación.
export default ProductCard;
