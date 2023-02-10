import React, { useState } from 'react';
import { product, filtersType } from '../constants/types';

type sidebarProps = {
  products: product[];
  filters: filtersType;
  setActiveFilterHandler: (
    e:
      | React.MouseEvent<HTMLButtonElement, MouseEvent>
      | React.ChangeEvent<HTMLSelectElement>
      | React.ChangeEvent<HTMLInputElement>
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
    new Set([...products.flatMap((prod) => prod.colors)])
  );

  return (
    <section className="section-sidebar">
      <h2 className="heading-secondary">Filters</h2>
      <div className="filter-block">
        <h3 className="heading-tertiary">Search product</h3>
        <input
          className="input-search"
          name="searchTerm"
          value={filters.searchTerm as string}
          onChange={setActiveFilterHandler}
        ></input>
      </div>
      <div className="filter-block">
        <h3 className="heading-tertiary">Category</h3>
        {categories.map((cat, i) => {
          return (
            <button
              key={i}
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
        <select
          className="filter filter-category"
          name="company"
          onChange={setActiveFilterHandler}
        >
          {companies.map((comp, i) => {
            return (
              <option key={i} value={comp}>
                {comp}
              </option>
            );
          })}
        </select>
      </div>
      <div className="filter-block">
        <h3 className="heading-tertiary">Color</h3>
        <button
          className={
            'all' === filters.currentColor
              ? 'btn-color btn-color-active'
              : 'btn-color'
          }
          data-type="currentColor"
          data-color="all"
          onClick={setActiveFilterHandler}
        >
          all
        </button>

        {colors.map((color, i) => {
          return (
            <button
              key={i}
              className={
                color === filters.currentColor
                  ? 'btn-color btn-color-active'
                  : 'btn-color'
              }
              style={{ backgroundColor: `${color}` }}
              data-type="currentColor"
              data-color={color}
              onClick={setActiveFilterHandler}
            ></button>
          );
        })}
      </div>
    </section>
  );
};

export default Sidebar;
