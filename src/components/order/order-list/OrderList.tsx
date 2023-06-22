import React, { FC } from "react";
import styles from "./order-list.module.css";
import { OrderCard } from "../order-card/OrderCard";
import { TCorrectOrder } from "../../../types/order";

type TOrderList = {
  orders: TCorrectOrder[];
};

export const OrderList: FC<TOrderList> = ({ orders }) => {

  return (
    <ul className={styles.list}>
      {orders.map((order) => (
        <OrderCard order={order} key={order._id} />
      ))}
    </ul>
  );
};
