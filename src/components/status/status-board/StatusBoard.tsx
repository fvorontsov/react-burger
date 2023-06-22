import React, { FC } from "react";
import styles from "./status-board.module.css";
import { StatusBoardList } from "../status-board-list/StatusBoardList";
import { useAppSelector } from "../../../store/hooks/redux";
import {
  getCorrectOrders,
  getDoneInProgressOrders,
} from "../../../utils/utils";

export const StatusBoard: FC = () => {
  const { orders, total, totalToday } = useAppSelector(
    (s) => s.feedSliceReducer
  );
  const ingredients = useAppSelector((s) => s.ingredientsReducer.ingredients);

  const { done, inProgress } = getDoneInProgressOrders(
    getCorrectOrders(orders, ingredients)
  );

  return (
    <section className={styles.board}>
      <div className={styles.stats}>
        <p className={"text text_type_main-medium"}>Готовы:</p>
        <p className={"text text_type_main-medium"}>В работе:</p>
        <StatusBoardList done={true} orders={done} />
        <StatusBoardList orders={inProgress} />
      </div>
      <div>
        <p className={"text text_type_main-medium mt-15"}>
          Выполнено за все время:
        </p>
        <p className={`${styles.shadow} text text_type_digits-large`}>
          {total.toLocaleString("ru")}
        </p>
        <p className={"text text_type_main-medium mt-15"}>
          Выполнено за сегодня:
        </p>
        <p className={`${styles.shadow} text text_type_digits-large`}>
          {totalToday.toLocaleString("ru")}
        </p>
      </div>
    </section>
  );
};
