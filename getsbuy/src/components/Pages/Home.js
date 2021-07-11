import React from "react";

import classes from "./Home.module.css";

import Header from "../Layout/Header/Header";
import Slider from "../Layout/Slider/Slider";
import Categories from "../Layout/Categories/Categories";
import Footer from "../Layout/Footer/Footer";

const Home = () => {
  return (
    <>
      <Header />
      <div className={classes.main}>
        <Slider />
        <Categories />
      </div>
      <Footer />
    </>
  );
};

export default Home;
