import { BurgerIngredients } from "../burger-ingredients/BurgerIngredients";
import { BurgerConstructor } from "../burger-constructor/BurgerConstructor";
import styles from "./main-container.module.css";
import PropTypes from "prop-types";
import { ingredientPropTypes } from "../../utils/propTypes";

export const MainContainer = ({ ingredients }) => {
  return (
    <main className={styles.container}>
      <BurgerIngredients ingredients={ingredients} />
      <BurgerConstructor ingredients={ingredients} />
    </main>
  );
};

MainContainer.propTypes = {
  ingredients: PropTypes.arrayOf(ingredientPropTypes.isRequired).isRequired,
};
