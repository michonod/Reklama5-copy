import React from "react";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import CloseIcon from "@mui/icons-material/Close";
import classes from "./SearchBar.module.css";

const ToggleMenuLeft = (props) => {
  const menuList = [
    { title: "Сите категории", id: "1" },
    { title: "Недвижности", id: "2" },
    { title: "Моторни Возила", id: "3" },
    { title: "Дом и Градина", id: "4" },
    { title: "Мода и Облека и Обувки", id: "5" },
    { title: "Мобилни телефони и додатоци", id: "6" },
    { title: "Компјутери", id: "7" },
    { title: "ТВ, Видео и Фото", id: "8" },
    { title: "Беби и Детски производи", id: "9" },
    { title: "Книги и литература", id: "10" },
    { title: "Слободно време и хоби, животни", id: "11" },
    { title: "Храна и Готвење", id: "12" },
    { title: "Вработување", id: "13" },
    { title: "Лични контакти", id: "14" },
    { title: "Останато", id: "15" },
  ];
  return (
    <ul className={classes.toggleMenu}>
      <span className={classes.closeIcon} onClick={props.toggleMenu}>
        <CloseIcon />
      </span>
      {menuList.map((item) => {
        return (
          <li>
            {item.title}
            <span className={classes.arrowIcon}>
              <ArrowForwardIosIcon />
            </span>
          </li>
        );
      })}
    </ul>
  );
};

export default ToggleMenuLeft;
