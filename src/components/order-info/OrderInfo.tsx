import React, { FC } from "react";
import styles from "./order-info.module.css";
import { formatDate } from "../../utils/utils";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { OrderInfoList } from "../order-info-list/OrderInfoList";

export const OrderInfo: FC = () => {
  const order = {
    _id: "624aae541a3b2c001bcf531d",
    ingredients: [
      {
        _id: "60d3b41abdacab0026a733cd",
        name: "Соус фирменный Space Sauce",
        type: "sauce",
        proteins: 50,
        fat: 22,
        carbohydrates: 11,
        calories: 14,
        price: 80,
        image: "https://code.s3.yandex.net/react/code/sauce-04.png",
        image_mobile:
          "https://code.s3.yandex.net/react/code/sauce-04-mobile.png",
        image_large: "https://code.s3.yandex.net/react/code/sauce-04-large.png",
        __v: 0,
        quantity: 0,
      },
      {
        _id: "60d3b41abdacab0026a733c7",
        name: "Флюоресцентная булка R2-D3",
        type: "bun",
        proteins: 44,
        fat: 26,
        carbohydrates: 85,
        calories: 643,
        price: 988,
        image: "https://code.s3.yandex.net/react/code/bun-01.png",
        image_mobile: "https://code.s3.yandex.net/react/code/bun-01-mobile.png",
        image_large: "https://code.s3.yandex.net/react/code/bun-01-large.png",
        __v: 0,
        quantity: 0,
      },
    ],
    status: "done",
    name: "Space флюоресцентный бургер",
    createdAt: "2022-04-04T08:37:40.487Z",
    updatedAt: "2022-04-04T08:37:40.706Z",
    number: 12889,
  };

  const { number, name, status, ingredients, createdAt } = order;
  const date = React.useMemo(() => formatDate(createdAt), [createdAt]);
  const cost = React.useMemo(
    () => ingredients.reduce((acc, cur) => acc + cur.price, 0),
    [ingredients]
  );

  const done = status === "done";

  return (
    <section className={styles.container}>
      <p
        className={`text text_type_digits-default ${styles.number}`}
      >{`#${number}`}</p>
      <p className={"text text_type_main-medium mt-10"}>{name}</p>
      <p
        className={`text text_type_main-default mt-3 ${done && styles.status}`}
      >
        {done ? "Выполнен" : "Готовится"}
      </p>
      <p className={"text text_type_main-medium mt-15"}>Состав:</p>
      <OrderInfoList />
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
