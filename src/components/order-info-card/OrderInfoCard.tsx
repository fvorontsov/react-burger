import React, { FC } from "react";
import styles from "./order-info-card.module.css";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { TCountedIngredient } from "../../types";
import { IngredientPreviewIcon } from "../ingredient-preview/ingredient-preview-icon/IngredientPreviewIcon";

type TOrderInfoCard = {
  ingredient: TCountedIngredient;
  index: number;
};

export const OrderInfoCard: FC<TOrderInfoCard> = ({ ingredient, index }) => {
  return (
    <li className={`${styles.card} mb-4`}>
      <IngredientPreviewIcon ingredient={ingredient} index={index} />
      <p className={`${styles.title} text text_type_main-default ml-4 mr-15`}>
        {ingredient.name}
      </p>
      <div className={`${styles.cost} mr-6`}>
        <p
          className={"text text_type_digits-default mr-2"}
        >{`${ingredient.quantity} x ${ingredient.price}`}</p>
        <CurrencyIcon type="primary" />
      </div>
    </li>
  );
};
