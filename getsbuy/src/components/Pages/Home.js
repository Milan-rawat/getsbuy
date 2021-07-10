import React from "react";

import classes from "./Home.module.css";

import Header from "../Layout/Header/Header";
import Slider from "../Layout/Slider/Slider";
import Categories from "../Layout/Categories/Categories";

const Home = () => {
  return (
    <div className="Home">
      <Header />
      <div className={classes.main}>
        <Slider />
        <Categories />
      </div>
    </div>
  );
};

export default Home;
