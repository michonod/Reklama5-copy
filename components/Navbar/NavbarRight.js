import React from "react";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import classes from "./Navbar.module.css";

const NavbarRight = (props) => {
  const iconStyle = { fontSize: 35, color: "grey" };
  const menuToggleHandler = () => {
    props.menuToggle(true);
  };
  return (
    <div className={classes.right}>
      <HelpOutlineIcon style={iconStyle} />
      <FavoriteBorderIcon style={iconStyle} />
      <span className={classes.registerMenu} onClick={menuToggleHandler}>
        <AccountCircleOutlinedIcon style={iconStyle} />
      </span>
    </div>
  );
};

export default NavbarRight;
