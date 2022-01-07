import React, { Fragment, useState } from "react";
import classes from "./SearchBar.module.css";
import MenuIcon from "@mui/icons-material/Menu";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import CloseIcon from "@mui/icons-material/Close";
import ToggleMenuLeft from "./ToggleMenuLeft";
import Overlay from "../UI/Overlay";
import ToggleMenuRight from "./ToggleMenuRight";
const SearchBar = (props) => {
  const [showMenuLeft, setShowMenuLeft] = useState(false);
  // const [showMenuRight, setShowMenuRight] = useState(false);
  const toggleLeftMenuHandler = () => {
    setShowMenuLeft((prevState) => !prevState);
  };

  return (
    <Fragment>
      {props.menuToggleRight && <Overlay />}
      {props.menuToggleRight && (
        <ToggleMenuRight setMenuToggleRight={props.setMenuToggleRight} />
      )}
      {showMenuLeft && <Overlay />}
      {showMenuLeft && <ToggleMenuLeft toggleMenu={toggleLeftMenuHandler} />}
      <div className={classes.searchBar}>
        <div
          className={classes.searchBar_start}
          onClick={toggleLeftMenuHandler}
        >
          <span className={classes.icon}>
            <MenuIcon style={{ fontSize: "30px" }} />
          </span>
          <span>Сите категории</span>
        </div>
        <div>
          <input type="text"></input>
        </div>
        <div>
          <LocationOnOutlinedIcon />
          <span>Цела Македонија</span>
        </div>
        <div className={classes.searchIcon}>
          <span>
            <SearchOutlinedIcon style={{ fontSize: "30px" }} />
          </span>
        </div>
      </div>
      );
    </Fragment>
  );
};

export default SearchBar;
