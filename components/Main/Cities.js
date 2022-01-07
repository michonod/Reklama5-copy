import React from "react";
import classes from "./Cities.module.css";

const Cities = () => {
  const cities1 = [
    "Скопје",
    "Битола",
    "Куманово",
    "Прилеп",
    "Тетово",
    "Велес",
    "Штип",
    "Охрид",
    "Гостивар",
    "Струмица",
    "Кавадарци",
    "Кочани",
    "Кичево",
    "Струга",
    "Радовиш",
  ];
  const cities2 = [
    "Гевгелија",
    "Дебар",
    "Крива Паланка",
    "Свети Николе",
    "Неготино",
    "Делчево",
    "Виница",
    "Ресен",
    "Пробиштип",
    "Берово",
    "Кратово",
    "Крушево",
    "Македонски Брод",
    "Валандово",
    "Демир Хисар",
  ];

  return (
    <div className={classes.cities}>
      <div className={classes.flexContainer}>
        <h4>Барај локално</h4>
        <p>Селектирај повеќе градови</p>
        <ul className={classes.citiesName}>
          {cities1.map((city) => {
            return (
              <li key={Math.random()}>
                <input type="radio"></input>
                <p>{city}</p>
              </li>
            );
          })}
        </ul>
      </div>
      <div className={classes.flexContainer}>
        <h4>Цела Македонија</h4>
        <ul className={classes.citiesName}>
          {cities2.map((city) => {
            return (
              <li key={Math.random()}>
                <input type="radio"></input>
                <p>{city}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Cities;
