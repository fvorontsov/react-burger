import React, { FC } from "react";
import styles from "./status-board-list.module.css";

type TStatusBoardList = {
  done?: boolean;
  orders: number[];
};

export const StatusBoardList:FC<TStatusBoardList> = ({ done, orders }) => {
    const maxOrders = orders.slice(0, 28);

    return (
        <ul className={styles.list}>
            {
                maxOrders.map((number, index) => (
                    <li key={index}>
                        <p className={`text text_type_digits-default ${done && styles.element}`}>{number}</p>
                    </li>
                ))
            }
        </ul>
    );
};
