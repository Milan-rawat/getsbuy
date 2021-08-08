import React from 'react';

import classes from './ProductCard.module.css';

import { Link } from 'react-router-dom';

const ProductCard = () => {
  return (
    <div className={classes.productCard}>
      <Link to={{
        pathname: `/product-details/${1}`
      }}>
        <div className={classes['product-image-container']}>
          <img
            src="https://rukminim1.flixcart.com/image/150/150/k2f1n680/headphone/9/g/s/boat-rockerz-400-super-extra-bass-original-imafg95ztgz7z8yz.jpeg?q=70"
            alt="product"
          />
        </div>
      </Link>
      <Link to={{
        pathname: `/product-details/${1}`
      }}>
        <div className={classes['product-description-container']}>
          <p className={classes['product-title']}>Sony Heaadphones</p>
          <p className={classes['product-price']}>2999₹</p>
          <p className={classes['product-description']}>
            Best Headphones at best price
          </p>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
