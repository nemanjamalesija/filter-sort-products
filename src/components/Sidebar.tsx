import React, { useState } from 'react';
import { product, filtersType } from '../constants/types';

type sidebarProps = {
  products: product[];
  filters: filtersType;
  setActiveFilterHandler: (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void;
};

const Sidebar = ({
  products,
  filters,
  setActiveFilterHandler,
}: sidebarProps) => {
  const categories = Array.from(
    new Set(['all', ...products.map((prod) => prod.category)])
  );

  const companies = Array.from(
    new Set(['all', ...products.map((prod) => prod.company)])
  );
  const colors = Array.from(
    new Set(['all', ...products.flatMap((prod) => prod.colors)])
  );

  return (
    <section className="section-sidebar">
      <h2 className="heading-secondary">Filters</h2>
      <div className="filter-block">
        <h3 className="heading-tertiary">Category:</h3>
        {categories.map((cat) => {
          return (
            <button
              data-type="category"
              className={cat === filters.category ? 'cat-active' : 'category'}
              onClick={setActiveFilterHandler}
            >
              {cat}
            </button>
          );
        })}
      </div>
      <div className="filter-block">
        <h3 className="heading-tertiary">Company</h3>
      </div>
      <div className="filter-block">
        <h3 className="heading-tertiary">Color</h3>
      </div>
    </section>
  );
};

export default Sidebar;
