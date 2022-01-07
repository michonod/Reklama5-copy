import React from "react";
import classes from "./Card.module.css";
import Image from "next/image";

const Card = ({ title, image, price }) => {
  return (
    <div className={classes.card}>
      <Image src={`/images/main/${image}.jpg`} width={250} height={180}></Image>
      <div className={classes.textContainer}>
        <h3 className={classes.title}>{title}</h3>
        <p className={classes.price}>{price} $</p>
      </div>
    </div>
  );
};

export default Card;
