import React, { FC } from "react";
import styles from "./order-info-list.module.css";
import { useSelector } from "react-redux";
import { OrderInfoCard } from "../order-info-card/OrderInfoCard";

export const OrderInfoList: FC = () => {
  const ingredientsData = useSelector(
    (state: any) => state.burgerIngredients.ingredients
  );

  return (
    <ul className={`${styles.list} custom-scroll`}>
      {ingredientsData.map((ingredient: any, index: any) => (
        <OrderInfoCard
          ingredient={ingredient}
          index={index}
          key={ingredient._id}
        />
      ))}
    </ul>
  );
};
