import React from "react";

import classes from "./Home.module.css";

import Header from "../components/Layout/Header/Header";
import Slider from "../components/Layout/Slider/Slider";
import Categories from "../components/Layout/Categories/Categories";
import Footer from "../components/Layout/Footer/Footer";

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
