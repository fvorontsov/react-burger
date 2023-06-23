import React, { FC, useEffect, useState } from "react";
import styles from "./order-info.module.css";
import {
  formatDate,
  getIngredients,
  logErrorDescription,
} from "../../utils/utils";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { OrderInfoList } from "../order-info-list/OrderInfoList";
import { TOrder } from "../../types/order";
import { useParams } from "react-router-dom";
import { useAppSelector } from "../../store/hooks/redux";
import { getOrder } from "../../utils/api";

type TOrderInfoParams = {
  id: string;
};

type TOrderInfo = {
    modal?: boolean;
}

export const OrderInfo: FC<TOrderInfo> = ({ modal = false }) => {
  const { id } = useParams<TOrderInfoParams>();
  const [order, setOrder] = useState<TOrder>();

  const ingredientsMy = useAppSelector((s) => s.ingredientsReducer.ingredients);

  useEffect(() => {
    if (id) {
      getOrder(id)
        .then((orders) => {
          const order = orders.find(
            (order) => order.number === Number.parseInt(id)
          );
          if (order) {
            setOrder(order);
          } else {
            console.log("No order in response from server");
          }
        })
        .catch((error) => logErrorDescription(error));
    } else {
      console.log("No order number to show details");
    }
  }, [id]);

  if (!order) {
    return null;
  }

  const { number, name, status, ingredients, createdAt } = order;

  const parsedIngredients = getIngredients(ingredients, ingredientsMy);

  const date = formatDate(createdAt);
  const cost = parsedIngredients.reduce((acc, cur) => acc + cur.price, 0);

  const done = status === "done";

  return (
    <section className={`${styles.container} mt-15 mb-10 mr-10 ml-10`}>
      <p
        className={`text text_type_digits-default ${!modal && styles.number}`}
      >{`#${number}`}</p>
      <p className={"text text_type_main-medium mt-10"}>{name}</p>
      <p
        className={`text text_type_main-default mt-3 ${done && styles.status}`}
      >
        {done ? "Выполнен" : "Готовится"}
      </p>
      <p className={"text text_type_main-medium mt-15 mb-6"}>Состав:</p>
      <OrderInfoList ingredients={parsedIngredients} />
      <div className={`${styles.footer} mt-10`}>
        <p className={"text text_type_main-default text_color_inactive"}>
          {date}
        </p>
        <div className={styles.total}>
          <p className={"text text_type_digits-default mr-2"}>{cost}</p>
          <CurrencyIcon type="primary" />
        </div>
      </div>
    </section>
  );
};
