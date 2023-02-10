import React, { useState, useEffect } from 'react';

type product = {
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

type stateType = {
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

const initialState: stateType = {
  products: [
    {
      id: '',
      category: '',
      description: '',
      company: '',
      colors: ['', '', ''],
      image: '',
      name: '',
      price: 0,
      shipping: false,
    },
  ],
  filteredProducts: [
    {
      id: '',
      category: '',
      description: '',
      company: '',
      colors: ['', '', ''],
      image: '',
      name: '',
      price: 0,
      shipping: false,
    },
  ],
  filters: {
    category: '',
    company: '',
    price: 0,
    shipping: false,
    colors: ['', '', ''],
  },
  loading: true,
};

function App() {
  const [state, setState] = useState(initialState);

  useEffect(() => {
    const fetchProducts = async () => {
      return await fetch('https://course-api.com/react-store-products');
    };

    fetchProducts()
      .then((response) => response.json())
      .then((data) =>
        setState((prev) => {
          return {
            ...prev,
            products: [...data],
            filteredProducts: [...data],
            loading: false,
          };
        })
      );
  }, []);

  if (state.loading) return <h1>Loading...</h1>;

  return <div className="App"></div>;
}

export default App;
