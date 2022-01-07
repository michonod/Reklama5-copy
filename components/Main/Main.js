import React from "react";
import MainAds from "./MainAds";
import MainBottom from "./MainBottom";
import classes from './Cities.module.css'

const Main = () => {
  return (
    <div className={classes.main}>
      <MainAds />
      <MainBottom />
    </div>
  );
};

export default Main;
