import styles from "./ingredients-list.module.css";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import React from "react";
import PropTypes from "prop-types";
import { ingredientPropTypes } from "../../../utils/propTypes";

export const IngredientsList = React.forwardRef(({ title, ingredients, onElementClick }, ref) => {
  return (
    <>
      <h2 ref={ref} className="text text_type_main-medium">{title}</h2>
      <ul className={`${styles.list} mt-6 mb-10 ml-4 mr-4`}>
        {ingredients.map((ingredient) => {
          const { _id, image, price, name } = ingredient;
          return (
            <li key={_id} onClick={() => onElementClick(ingredient)}>
              <div className={styles.main_container}>
                <img className="ml-4 mr-4" src={image} alt={name} />
                <div className={styles.description_container}>
                  <div className={`${styles.price_container} mt-1 mb-1`}>
                    <p className="text text_type_digits-default">{price}</p>
                    <CurrencyIcon type="primary" />
                  </div>
                  <p className={`${styles.name} text text_type_main-default`}>
                    {name}
                  </p>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
});

IngredientsList.propTypes = {
  title: PropTypes.string.isRequired,
  ingredients: PropTypes.arrayOf(ingredientPropTypes.isRequired).isRequired,
  onElementClick: PropTypes.func.isRequired,
};
