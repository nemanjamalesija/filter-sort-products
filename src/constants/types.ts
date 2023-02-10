export type product = {
  id: string;
  category: string;
  colors: string[];
  company: string;
  description: string;
  image: string;
  name: string;
  price: number;
  shipping: boolean;
};

export type stateType = {
  products: product[];
  filteredProducts: product[];
  filters: {
    category: string;
    company: string;
    price: number;
    shipping: boolean;
    colors: string[];
  };
  loading: boolean;
};

export type productsProps = {
  products: product[];
};
