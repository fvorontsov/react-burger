import React, { FC } from "react";
import styles from "./order-info-list.module.css";
import { OrderInfoCard } from "../order-info-card/OrderInfoCard";
import { TCountedIngredient } from "../../types";

type TOrderInfoList = {
  ingredients: TCountedIngredient[];
};

export const OrderInfoList: FC<TOrderInfoList> = ({ ingredients }) => {
  return (
    <ul className={`${styles.list} custom-scroll`}>
      {ingredients.map((ingredient, index) => (
        <OrderInfoCard
          ingredient={ingredient}
          index={index}
          key={ingredient._id}
        />
      ))}
    </ul>
  );
};
