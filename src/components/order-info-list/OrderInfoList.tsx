import React, { FC } from "react";
import styles from "./order-info-list.module.css";
import { OrderInfoCard } from "../order-info-card/OrderInfoCard";
import { useAppSelector } from "../../store/hooks/redux";

export const OrderInfoList: FC = () => {
  const ingredientsData = useAppSelector(
    (s) => s.ingredientsReducer.ingredients
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
