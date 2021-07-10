import React from "react";

import classes from "./Home.module.css";

import Header from "../Layout/Header/Header";
import Slider from "../Layout/Slider/Slider";

const Home = () => {
  return (
    <div className="Home">
      <Header />
      <div className={classes.main}>
        <Slider />
      </div>
    </div>
  );
};

export default Home;
