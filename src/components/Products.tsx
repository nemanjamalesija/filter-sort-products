import React from 'react';
import { product } from '../constants/types';
import SingleProduct from './SingleProduct';

export type productsProps = {
  products: product[];
};

const Products = ({ products }: productsProps) => {
  return (
    <section className="section-products">
      {products.map((prod) => {
        return <SingleProduct key={prod.id} {...prod} />;
      })}
    </section>
  );
};

export default Products;
