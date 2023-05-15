import styles from "./ingredient-card.module.css";
import {
  Counter,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import React, { FC } from "react";
import { useDrag } from "react-dnd";
import { ItemTypes } from "../../../../utils/constants";
import { Link } from "react-router-dom";
import { TIngredientCard } from "../../../../types";

export const IngredientCard: FC<TIngredientCard> = ({
  ingredient,
  onElementClick,
}) => {
  const { _id, image, price, name } = ingredient;

  const [, dragRef] = useDrag({
    type: ItemTypes.INGREDIENT_CARD,
    item: ingredient,
  });

  return (
    <Link
      key={_id}
      to={`ingredients/${_id}`}
      state={{
        fromCard: true,
      }}
      onClick={() => onElementClick(ingredient)}
      ref={dragRef}
      className={styles.link}
    >
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
    </Link>
  );
};
