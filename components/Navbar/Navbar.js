import React from "react";
import NavbarLeft from "./NavbarLeft";
import NavbarMiddle from "./NavbarMiddle";
import NavbarRight from "./NavbarRight";
import classes from "./Navbar.module.css";

const Navbar = (props) => {
  return (
    <div className={classes.navbar}>
      <NavbarLeft />
      <NavbarMiddle />
      <NavbarRight menuToggle={props.menuToggle} />
    </div>
  );
};

export default Navbar;
