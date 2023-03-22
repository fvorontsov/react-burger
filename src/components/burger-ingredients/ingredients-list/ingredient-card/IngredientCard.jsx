import styles from "./ingredient-card.module.css";
import {
  Counter,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import React from "react";
import { useDrag } from "react-dnd";
import { ItemTypes } from "../../../../utils/constants";

export const IngredientCard = ({ ingredient, onElementClick }) => {
  const { _id, image, price, name } = ingredient;

  const [, dragRef] = useDrag({
    type: ItemTypes.INGREDIENT_CARD,
    item: ingredient,
  });

  return (
    <li key={_id} onClick={() => onElementClick(ingredient)} ref={dragRef}>
      <div className={styles.main_container}>
        <img className="ml-4 mr-4" src={image} alt={name} />
        <div className={styles.description_container}>
          <div className={`${styles.price_container} mt-1 mb-1`}>
            <p className="text text_type_digits-default">{price}</p>
            <CurrencyIcon type="primary" />
          </div>
          <p className={`${styles.name} text text_type_main-default`}>{name}</p>
        </div>
        {0 < ingredient.quantity && (
          <Counter count={ingredient.quantity} size="default" />
        )}
      </div>
    </li>
  );
};
