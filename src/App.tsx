import React, { useState, useEffect } from 'react';
import Products from './components/Products';
import Sidebar from './components/Sidebar';
import { initialState } from './constants/initialState';

function App() {
  const [state, setState] = useState(initialState);

  useEffect(() => {
    const filterProductsHandler = () => {
      let filteredProductsTemp = [...state.products];
      const { searchTerm, category, company, currentColor } = state.filters;

      if (searchTerm) {
        filteredProductsTemp = filteredProductsTemp.filter((prod) =>
          prod.name.includes(searchTerm as string)
        );
      }

      if (category && category !== 'all') {
        filteredProductsTemp = filteredProductsTemp.filter(
          (prod) => prod.category === category
        );
      }

      setState((prev) => {
        return { ...prev, filteredProducts: filteredProductsTemp };
      });
    };

    filterProductsHandler();
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
      | React.ChangeEvent<HTMLInputElement>
  ) => {
    let value: string;
    let key: string;

    const buttonTarget = e.target as Element;
    const inputTarget = e.target as HTMLInputElement;

    if (e.type === 'click') {
      value = buttonTarget.textContent as string;
      key = buttonTarget.getAttribute('data-type') as string;
    }

    if (
      e.type === 'click' &&
      buttonTarget.getAttribute('data-type') === 'currentColor'
    ) {
      value = buttonTarget.getAttribute('data-color') as string;
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
