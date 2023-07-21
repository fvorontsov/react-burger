import React, { FC, useEffect } from "react";
import styles from "./feed.module.css";
import { OrderList } from "../../components/order/order-list/OrderList";
import { StatusBoard } from "../../components/status/status-board/StatusBoard";
import { useAppDispatch, useAppSelector } from "../../store/hooks/redux";
import { getCorrectOrders } from "../../utils/utils";
import {
  feedWSConnect,
  feedWSDisconnect,
} from "../../store/actions/FeedActions";

export const FeedPage: FC = () => {
  const ingredientsData = useAppSelector(
    (s) => s.ingredientsReducer.ingredients
  );

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(feedWSConnect("wss://norma.nomoreparties.space/orders/all"));
    return () => {
      dispatch(feedWSDisconnect());
    };
  }, [dispatch]);

  const orders = useAppSelector((s) => s.feedSliceReducer.orders);
  const correctOrders = orders && getCorrectOrders(orders, ingredientsData);

  return (
    <main className={styles.main}>
      <h1 className={"text text_type_main-large mb-5 mt-10"}>Лента заказов</h1>
      <section className={`${styles.orders} custom-scroll pr-2`}>
        <OrderList orders={correctOrders} />
      </section>
      <StatusBoard />
    </main>
  );
};
