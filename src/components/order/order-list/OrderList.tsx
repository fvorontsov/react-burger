import React, { FC } from "react";
import styles from "./order-list.module.css";
import { ORDER_TEST } from "../../../utils/constants";
import { OrderCard } from "../order-card/OrderCard";

export const OrderList: FC = () => {
  return (
    <ul className={styles.list}>
      {ORDER_TEST.orders.map((order, index) => (
        <OrderCard
          number={order.number}
          createdAt={order.createdAt}
          name={order.name}
          ingredients={order.ingredients}
          key={order._id}
        />
      ))}
    </ul>
  );
};
