import React from 'react';
import { productsProps } from '../constants/types';

const Sidebar = ({ products }: productsProps) => {
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
      <h2 className="Filter by"></h2>
    </section>
  );
};

export default Sidebar;
