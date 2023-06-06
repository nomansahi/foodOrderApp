import { Fragment } from "react";
import mealImage from "../../assets/meals.jpg";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";

function Header(props) {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>SpicyMeals</h1>
        <HeaderCartButton onClickHandler={props.onClickHandler} />
      </header>
      <div className={classes["main-image"]}>
        <img src={mealImage} alt="A table full of spicy foods" />
      </div>
    </Fragment>
  );
}

export default Header;
