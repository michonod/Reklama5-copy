import React from "react";
import classes from "./SearchBar.module.css";
import CloseIcon from "@mui/icons-material/Close";
import Button from "../UI/Button";
import HowToRegIcon from "@mui/icons-material/HowToReg";

const ToggleMenuRight = (props) => {
  const toggleMenuHandler = () => {
    props.setMenuToggleRight(false);
  };
  return (
    <div className={classes.toggleMenuRight}>
      <div className={classes.closeIconRight}>
        <CloseIcon style={{ fontSize: "30px" }} onClick={toggleMenuHandler} />
      </div>
      <hr />
      <div className={classes.formUp}>
        <h4>Најави се</h4>
        <form>
          <input type="email" placeholder="Е-маил" />
          <input type="password" placeholder="Лозинка" />
          <div className="saveUserId">
            <label for="saveUser">Запомни ме</label>
            <input type="checkbox" id="saveUser" />
          </div>
          <Button className={classes.button}>Најави се</Button>
        </form>
      </div>
      <div className={classes.formDown}>
        <h4>Регистрирај се</h4>
        <form>
          <input type="text" placeholder="Име" />
          <select>
            <option>Одбери локација</option>
            <option>Скопје</option>
            <option>Прилеп</option>
            <option>Битола</option>
          </select>
          <input type="email" placeholder="Е-маил" />
          <input type="number" placeholder="Телефон" />
          <input type="password" placeholder="Лозинка" />
          <input type="password" placeholder="Повтори лозинка" />
          <div className={classes.conditions}>
            <label for="accept">
              Се согласувам и ги прифаќам условите на употреба
            </label>
            <input type="checkbox" id="accept" />
          </div>
          <div>
            <label for="news">Се согласувам да добивам новости</label>
            <input type="checkbox" id="news" />
          </div>
          <Button className={classes.buttonRegister}>
            <span className={classes.regIcon}>
              <HowToRegIcon />
            </span>
            Регистрирај се
          </Button>
        </form>
      </div>
    </div>
  );
};

export default ToggleMenuRight;
