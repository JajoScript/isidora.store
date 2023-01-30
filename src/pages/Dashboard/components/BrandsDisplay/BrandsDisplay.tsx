// Dependencias.
import JumboLogo from "../../../../assets/images/stores/jumbo.svg";
import UnimarcLogo from "../../../../assets/images/stores/unimarc.svg";
import { Store } from "../../../../models/types/Store";
import { AnimatePresence, motion } from "framer-motion";
import { ReactSVG } from "react-svg";

// Estilos.
import "./BrandsDisplay.styles.css";

// Props.
interface Props {
  stores: Store[];
}

// Definición del componente: <BrandsDisplays />
const BrandsDisplay = (props: Props) => {
  // 1. Manejo del estado.
  const { stores } = props;

  // 2. Ciclo de vida.
  // 3. Metodos.
  const mappingStore = () => {
    let storeArray: any = [];

    stores.map((store, index) => {
      if (store.id === "JUMBO") {
        storeArray.push(
          <motion.div>
            <img src={JumboLogo} className="BrandsDisplay-icon" />
          </motion.div>
        );
      } else if (store.id === "UNIMARC") {
        storeArray.push(
          <motion.img
            key={index}
            src={UnimarcLogo}
            alt="Unimarc Logo"
            className="BrandsDisplay-icon"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          />
        );
      }
    });

    return storeArray.map((store: any, index: number) => {
      return store;
    });
  };

  // 4. Render
  return <div className="BrandsDisplay_container">{mappingStore()}</div>;
};

// Exportación.
export default BrandsDisplay;
