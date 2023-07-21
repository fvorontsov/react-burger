import React, { FC } from "react";
import styles from "./ingredient-preview-list.module.css";
import { IngredientPreviewIcon } from "../ingredient-preview-icon/IngredientPreviewIcon";
import { TIngredientCommon } from "../../../types";

type TIngredientPreviewList = {
  ingredients: TIngredientCommon[];
};

export const IngredientPreviewList: FC<TIngredientPreviewList> = ({
  ingredients,
}) => {
  const listToRender =
    ingredients.length > 6 ? ingredients.slice(0, 6) : ingredients;
  const rest = ingredients.length > 6 ? ingredients.length - 6 : 0;

  return (
    <ul className={styles.list}>
      {listToRender.map((ingredient, index) => (
        <li key={index}>
          <IngredientPreviewIcon
            ingredient={ingredient}
            index={index}
            rest={rest}
            withCascade={true}
          />
        </li>
      ))}
    </ul>
  );
};
