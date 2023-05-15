import React, { FC } from "react";
import styles from "./order-card.module.css";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { formatDate } from "../../../utils/utils";
import { TIngredientCommon } from "../../../types";
import { useSelector } from "react-redux";
import { IngredientPreviewList } from "../../ingredient-preview/ingredient-preview-list/IngredientPreviewList";

type TOrderCard = {
  number: number;
  createdAt: string;
  name: string;
  ingredients: string[];
};

export const OrderCard: FC<TOrderCard> = ({
  number,
  createdAt,
  name,
  ingredients: ingredientsIds,
}) => {
  const ingredientsData = useSelector(
    (state: any) => state.burgerIngredients.ingredients
  );

  const getIngredients = (ids: string[], data: TIngredientCommon[]) => {
    const ingredients: TIngredientCommon[] = [];
    if (data) {
      ids.forEach((id) => {
        ingredientsData.forEach((ingredient: any) => {
          if (ingredient._id === id) {
            ingredients.push(ingredient);
          }
        });
      });
    }
    return ingredients;
  };

  const ingredients = React.useMemo(
    () => getIngredients(ingredientsIds, ingredientsData),
    [ingredientsIds, ingredientsData]
  );
  const cost = React.useMemo(
    () => ingredients.reduce((acc, cur) => acc + cur.price, 0),
    [ingredients]
  );
  const date = React.useMemo(() => formatDate(createdAt), [createdAt]);

  return (
    <li className={styles.card}>
      <div className={"mt-6 mr-6 ml-6 mb-6"}>
        <div className={styles.header}>
          <p className={"text text_type_digits-default"}>{`#${number}`}</p>
          <p className={"text text_type_main-default text_color_inactive"}>
            {date}
          </p>
        </div>
        <p className={"text text_type_main-medium mt-6"}>{name}</p>
        <div className={`${styles.container} mt-6`}>
          <IngredientPreviewList ingredients={ingredients} />
          <div className={`${styles.cost} ml-6`}>
            <p className={"text text_type_digits-default mr-2"}>{cost}</p>
            <CurrencyIcon type="primary" />
          </div>
        </div>
      </div>
    </li>
  );
};
