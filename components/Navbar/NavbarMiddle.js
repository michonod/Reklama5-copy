import React from "react";
import Image from "next/image";
import classes from "./Navbar.module.css";
import Link from "next/link";

const NavbarMiddle = () => {
  return (
    <div className={classes.middle}>
      <Image src="/images/logo-middle.jpg" width={100} height={30}></Image>
      <p>3589798 Огласи</p>
      <div className={classes.middle_add}>
        <Image src="/images/circle_pen.jpg" width={40} height={10}></Image>
        <Link href="/vnesinovoglas">
          <a>
            <p>Внеси нов оглас</p>
            <span>бесплатно</span>
          </a>
        </Link>
      </div>
    </div>
  );
};

export default NavbarMiddle;
