import React, { FC } from "react";
import styles from "./feed.module.css";
import { OrderList } from "../../components/order/order-list/OrderList";
import { StatusBoard } from "../../components/status/status-board/StatusBoard";

export const FeedPage: FC = () => {
  return (
    <main className={styles.main}>
      <h1 className={"text text_type_main-large mb-5 mt-10"}>Лента заказов</h1>
      <section className={`${styles.orders} custom-scroll pr-2`}>
        <OrderList />
      </section>
      <StatusBoard />
    </main>
  );
};
