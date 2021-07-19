import React from "react";

import classes from "./ProductsCard.module.css";

import ProductCard from "../ProductCard/ProductCard";

const ProductsCard = () => {
  return (
    <div className={classes.productsCard}>
      <p className={classes["productsCard-title"]}>You may like</p>
      <div className={classes["product-cards"]}>
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  );
};

export default ProductsCard;
