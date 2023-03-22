import styles from "./ingredients-list.module.css";
import React from "react";
import PropTypes from "prop-types";
import { ingredientPropTypes } from "../../../utils/propTypes";
import { IngredientCard } from "./ingredient-card/IngredientCard";

export const IngredientsList = React.forwardRef(
  ({ title, ingredients, onElementClick }, ref) => {
    return (
      <>
        <h2 ref={ref} className="text text_type_main-medium">
          {title}
        </h2>
        <ul className={`${styles.list} mt-6 mb-10 ml-4 mr-4`}>
          {ingredients.map((ingredient) => {
            return (
              <IngredientCard
                key={ingredient._id}
                ingredient={ingredient}
                onElementClick={onElementClick}
              ></IngredientCard>
            );
          })}
        </ul>
      </>
    );
  }
);

IngredientsList.propTypes = {
  title: PropTypes.string.isRequired,
  ingredients: PropTypes.arrayOf(ingredientPropTypes.isRequired).isRequired,
  onElementClick: PropTypes.func.isRequired,
};
