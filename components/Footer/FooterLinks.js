import React from "react";
import Link from "next/link";
import classes from "./Footer.module.css";

const FooterLinks = () => {
  return (
    <div className={classes.footerLinks}>
      <p>Reklama99.mk - Најголемата платформа за тргување во Македонија</p>

      <div className={classes.links}>
        <div>
          <h3>Компанија</h3>
          <ul>
            <Link href="/">
              <li>Мичоно Дооел</li>
            </Link>
            <Link href="/">
              <li>За Реклама5</li>
            </Link>
            <Link href="/">
              <li>Маркетинг</li>
            </Link>
            <Link href="/">
              <li>Услови на употреба</li>
            </Link>
            <Link href="/">
              <li>Контакт</li>
            </Link>
          </ul>
        </div>
        <div>
          <h3>Компанија</h3>
          <ul>
            <Link href="/">
              <li>Мичоно Дооел</li>
            </Link>
            <Link href="/">
              <li>За Реклама5</li>
            </Link>
            <Link href="/">
              <li>Маркетинг</li>
            </Link>
            <Link href="/">
              <li>Услови на употреба</li>
            </Link>
            <Link href="/">
              <li>Контакт</li>
            </Link>
          </ul>
        </div>
        <div>
          <h3>Компанија</h3>
          <ul>
            <Link href="/">
              <li>Мичоно Дооел</li>
            </Link>
            <Link href="/">
              <li>За Реклама5</li>
            </Link>
            <Link href="/">
              <li>Маркетинг</li>
            </Link>
            <Link href="/">
              <li>Услови на употреба</li>
            </Link>
            <Link href="/">
              <li>Контакт</li>
            </Link>
          </ul>
        </div>
        <div>
          <h3>Компанија</h3>
          <ul>
            <Link href="/">
              <li>Мичоно Дооел</li>
            </Link>
            <Link href="/">
              <li>За Реклама5</li>
            </Link>
            <Link href="/">
              <li>Маркетинг</li>
            </Link>
            <Link href="/">
              <li>Услови на употреба</li>
            </Link>
            <Link href="/">
              <li>Контакт</li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FooterLinks;
