import styles from "./consutrctor-list.module.css";
import PropTypes from "prop-types";
import { ingredientPropTypes } from "../../../utils/propTypes";
import { ConstructorCard } from "./constructor-card/ConstructorCard";

export const ConstructorList = ({ ingredients }) => {
  return (
    <div className={`${styles.container} pr-2 custom-scroll`}>
      {ingredients.map((ingredient, index) => {
        const { uuid } = ingredient;
        return (
          <ConstructorCard key={uuid} ingredient={ingredient} index={index} />
        );
      })}
    </div>
  );
};

ConstructorList.propTypes = {
  ingredients: PropTypes.arrayOf(ingredientPropTypes.isRequired).isRequired,
};
