import React, { useState, useEffect } from 'react';
import Products from './components/Products';
import Sidebar from './components/Sidebar';
import { initialState } from './constants/initialState';
import { filtersType, stateType } from './constants/types';

function App() {
  const [state, setState] = useState(initialState);

  useEffect(() => {
    console.log(state.filters);
  }, [state.filters]);

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
    e:
      | React.MouseEvent<HTMLButtonElement, MouseEvent>
      | React.ChangeEvent<HTMLSelectElement>
  ) => {
    let value: string;
    let key: string;

    const buttonTarget = e.target as Element;
    const inputTarget = e.target as HTMLInputElement;

    if (e.type === 'click') {
      value = buttonTarget.textContent as string;
      key = buttonTarget.getAttribute('data-type') as string;
    }
    if (e.type === 'change') {
      key = inputTarget.name;
      value = inputTarget.value;
    }

    setState((prev) => {
      return { ...prev, filters: { ...prev.filters, [key]: value } };
    });
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
