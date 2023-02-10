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

export type filtersType = {
  [key: string]: string | string[] | number | boolean;
};

export type stateType = {
  products: product[];
  filteredProducts: product[];
  filters: filtersType;
  loading: boolean;
};
