// Dependencias.
import { Product } from "./Product";
import { IsidorasRate } from "./IsidorasRate";
import { Store } from "./Store";

interface ProductStore {
  productInfo: Product;
  isidorasRate: IsidorasRate;
  stores: Store[];
}

// Exportación.
export type { ProductStore };
