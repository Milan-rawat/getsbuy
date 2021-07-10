import React from "react";

import classes from "./Categories.module.css";

const Categories = () => {
  return (
    <div className={classes["categories-container"]}>
      <p className={classes["categories-heading"]}>Categories</p>
      <div className={classes["categories"]}>
        <div className={classes["category"]}>
          <div className={classes["category-image"]}>
            <img
              src="https://rukminim1.flixcart.com/flap/128/128/image/22fddf3c7da4c4f4.png?q=100"
              alt="category"
            />
          </div>
          <p className={classes["category-title"]}>Mobiles</p>
        </div>
        <div className={classes["category"]}>
          <div className={classes["category-image"]}>
            <img
              src="https://rukminim1.flixcart.com/flap/128/128/image/82b3ca5fb2301045.png?q=100"
              alt="category"
            />
          </div>
          <p className={classes["category-title"]}>Fashion</p>
        </div>
        <div className={classes["category"]}>
          <div className={classes["category-image"]}>
            <img
              src="https://rukminim1.flixcart.com/flap/128/128/image/ab7e2b022a4587dd.jpg?q=100"
              alt="category"
            />
          </div>
          <p className={classes["category-title"]}>Home</p>
        </div>
        <div className={classes["category"]}>
          <div className={classes["category-image"]}>
            <img
              src="https://rukminim1.flixcart.com/flap/128/128/image/0ff199d1bd27eb98.png?q=100"
              alt="category"
            />
          </div>
          <p className={classes["category-title"]}>Appliances</p>
        </div>
        <div className={classes["category"]}>
          <div className={classes["category-image"]}>
            <img
              src="https://rukminim1.flixcart.com/flap/128/128/image/71050627a56b4693.png?q=100"
              alt="category"
            />
          </div>
          <p className={classes["category-title"]}>Travel</p>
        </div>
        <div className={classes["category"]}>
          <div className={classes["category-image"]}>
            <img
              src="https://rukminim1.flixcart.com/flap/128/128/image/dff3f7adcf3a90c6.png?q=100"
              alt="category"
            />
          </div>
          <p className={classes["category-title"]}>Toys</p>
        </div>
        <div className={classes["category"]}>
          <div className={classes["category-image"]}>
            <img
              src="https://rukminim1.flixcart.com/flap/128/128/image/69c6589653afdb9a.png?q=100"
              alt="category"
            />
          </div>
          <p className={classes["category-title"]}>Electronics</p>
        </div>
        <div className={classes["category"]}>
          <div className={classes["category-image"]}>
            <img
              src="https://rukminim1.flixcart.com/flap/128/128/image/f15c02bfeb02d15d.png?q=100"
              alt="category"
            />
          </div>
          <p className={classes["category-title"]}>Offers</p>
        </div>
        <div className={classes["category"]}>
          <div className={classes["category-image"]}>
            <img
              src="https://rukminim1.flixcart.com/flap/128/128/image/29327f40e9c4d26b.png?q=100"
              alt="category"
            />
          </div>
          <p className={classes["category-title"]}>Grocery</p>
        </div>
      </div>
    </div>
  );
};

export default Categories;
