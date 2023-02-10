import React, { useState, useEffect } from 'react';
import Products from './components/Products';
import Sidebar from './components/Sidebar';
import { initialState } from './constants/initialState';

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

  return (
    <div className="App">
      <Sidebar products={state.products} />
      <Products products={state.filteredProducts} />
    </div>
  );
}

export default App;
