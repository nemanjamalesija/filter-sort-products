import React from 'react';
import { product } from '../constants/types';

type SingleProductProps = product;

const SingleProduct = ({ name, image, price }: SingleProductProps) => {
  return (
    <article className="single-prod">
      <header>
        <img className="prod-image" src={image} alt={name} />{' '}
      </header>
      <div className="prod-description">
        <h5 className="heading-fifth">{name}</h5>
        <p className="prod-price">{price}</p>
      </div>
    </article>
  );
};

export default SingleProduct;
