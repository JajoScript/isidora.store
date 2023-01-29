// Dependencias.
import { ProductStore } from "./ProductStore";

// Definición.
interface ResponseAPI {
  error: boolean;
  success: boolean;
  message: string;
  status: number;

  data: {
    products: ProductStore[];
  };
}

// Exportación.
export type { ResponseAPI };
