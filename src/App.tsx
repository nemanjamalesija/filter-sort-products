import React, { useState, useEffect } from 'react';
import Products from './components/Products';
import Sidebar from './components/Sidebar';
import { initialState } from './constants/initialState';
import { filtersType, stateType } from './constants/types';

function App() {
  const [state, setState] = useState(initialState);

  useEffect(() => console.log(state), [state.filters]);

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

  const setActiveFilterHandler = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    const target = e.target as Element;
    const name = target.getAttribute('data-type') as string;
    const value = target.textContent as string;

    const newState = { ...state };
    newState.filters[name as keyof filtersType] = value;
    setState(newState);
  };

  return (
    <div className="App">
      <Sidebar
        products={state.products}
        filters={state.filters}
        setActiveFilterHandler={setActiveFilterHandler}
      />
      <Products products={state.filteredProducts} />
    </div>
  );
}

export default App;
