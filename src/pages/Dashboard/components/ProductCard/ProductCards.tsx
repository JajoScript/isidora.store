// Dependencias.
import { useState, useEffect } from "react";
import fakeData from "../../../../models/api/getProducts.json";
import { ResponseAPI } from "../../../../models/types/ResponseAPI";
import { Product } from "../../../../models/types/Product";
import { ProductStore } from "../../../../models/types/ProductStore";
import ProductCard from "./ProductCard";

// Estilos.
import "./ProductCards.styles.css";

// Props.
interface Props {}

// Definición del componente: <ProductCards />
const ProductCards = (props: Props) => {
  // 1. Manejo del estado.
  const {} = props;
  const APIProducts: ResponseAPI = fakeData;
  const AllProducts: ProductStore[] = APIProducts.data.products ?? [];

  // 2. Ciclo de vida.
  // 3. Metodos.
  const mappingProducts = () => {
    return AllProducts.map((product: ProductStore, index: number) => {
      return <ProductCard product={product} key={index} />;
    });
  };

  // 4. Render.
  return <div className="ProductCards_container">{mappingProducts()}</div>;
};

// Exportación.
export default ProductCards;
