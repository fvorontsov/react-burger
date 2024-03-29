import React, { FC } from "react";
import styles from "./order-card.module.css";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { formatDate } from "../../../utils/utils";
import { IngredientPreviewList } from "../../ingredient-preview/ingredient-preview-list/IngredientPreviewList";
import { TCorrectOrder } from "../../../types/order";
import { Link, useLocation } from "react-router-dom";

export type TOrderCardProps = {
  order: TCorrectOrder;
};

export const OrderCard: FC<TOrderCardProps> = ({ order }) => {
  const location = useLocation();

  const { number, ingredients, createdAt, name, status } = order;

  const date = React.useMemo(() => formatDate(createdAt), [createdAt]);
  const cost = React.useMemo(
    () => ingredients.reduce((acc, cur) => acc + cur.price * cur.quantity, 0),
    [ingredients]
  );

  return (
    <li className={styles.card}>
      <Link
        to={{ pathname: `${number}` }}
        state={{ orderCard: location }}
        className={styles.link}
      >
        <div className={"mt-6 mr-6 ml-6 mb-6"}>
          <div className={styles.header}>
            <p className={"text text_type_digits-default"}>{`#${number}`}</p>
            <p className={"text text_type_main-default text_color_inactive"}>
              {date}
            </p>
          </div>
          <p className={"text text_type_main-medium mt-6"}>{name}</p>
          {false && (
            <p
              className={`text text_type_main-small ${
                status === "done" && styles.done
              } mt-2`}
            >
              {status === "created"
                ? "Создан"
                : status === "pending"
                ? "Готовится"
                : "Выполнен"}
            </p>
          )}

          <div className={`${styles.container} mt-6`}>
            <IngredientPreviewList ingredients={ingredients} />
            <div className={`${styles.cost} ml-6`}>
              <p className={"text text_type_digits-default mr-2"}>{cost}</p>
              <CurrencyIcon type="primary" />
            </div>
          </div>
        </div>
      </Link>
    </li>
  );
};
