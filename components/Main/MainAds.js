import React from "react";
import Card from "../UI/Card";
import classes from "./MainAds.module.css";

const Main = () => {
  const data = [
    {
      title: "Honda Civic 2008",
      price: 51995,
      image: "img1",
    },
    {
      title: "Lamoborugini",
      price: 995,
      image: "img2",
    },
    {
      title: "Tesla",
      price: 222995,
      image: "img3",
    },
    {
      title: "Fiat",
      price: 95,
      image: "img4",
    },
    {
      title: "Honda Civic 2008",
      price: 51995,
      image: "img5",
    },
    {
      title: "Lamoborugini",
      price: 995,
      image: "img6",
    },
    {
      title: "Tesla",
      price: 222995,
      image: "img7",
    },
    {
      title: "Fiat",
      price: 95,
      image: "img8",
    },
    {
      title: "Lamoborugini",
      price: 995,
      image: "img6",
    },
    {
      title: "Tesla",
      price: 222995,
      image: "img7",
    },
  ];
  return (
    <div className={classes.container}>
      {data.map((product) => {
        return (
          <Card
            title={product.title}
            image={product.image}
            price={product.price}
            key={Math.random()}
          />
        );
      })}
    </div>
  );
};

export default Main;
