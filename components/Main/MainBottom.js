import Map from "./Map";
import Cities from "./Cities";
import classes from "./Map.module.css";

const MainBottom = () => {
  return (
    <div className={classes.mainBottom}>
      <Map />
      <Cities />
    </div>
  );
};

export default MainBottom;
