// Dependencias.
import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import fakeData from "../../../../models/api/getProducts.json";
import { ResponseAPI } from "../../../../models/types/ResponseAPI";
import { Product } from "../../../../models/types/Product";
import { ProductStore } from "../../../../models/types/ProductStore";
import ProductCard from "./ProductCard";

// Estilos.
import "./ProductCards.styles.css";
import ProductCardsAnimate from "./animations/ProductCards.animate";

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
      return (
        <motion.div
          key={index}
          variants={ProductCardsAnimate}
          initial="hidden"
          animate="visible"
          custom={index}
        >
          <ProductCard product={product} key={index} />
        </motion.div>
      );
    });
  };

  // 4. Render.
  return (
    <div className="ProductCards_container">
      <AnimatePresence>{mappingProducts()}</AnimatePresence>
    </div>
  );
};

// Exportación.
export default ProductCards;
