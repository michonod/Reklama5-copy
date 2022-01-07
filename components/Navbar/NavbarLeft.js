import React from "react";
import Image from "next/image";
import Link from "next/link";
import classes from "./Navbar.module.css";

const NavbarLeft = () => {
  return (
    <div className={classes.left}>
      <Image src="/images/logo-left.png" width="100" height="50"></Image>
      <div className={classes.left_links}>
        <Link href="/SiteOglasi">
          <a>Сите огласи </a>
        </Link>

        <Link href="/Prodavnici">
          <a>Продавници </a>
        </Link>
      </div>
    </div>
  );
};

export default NavbarLeft;
