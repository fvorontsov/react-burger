import React, { FC } from "react";
import styles from "./ingredient-preview-icon.module.css";
import { TIngredientCommon } from "../../../types";

export type TIngredientPreview = {
  ingredient: TIngredientCommon;
  index: number;
  rest?: number;
  withCascade?: boolean;
};

export const IngredientPreviewIcon: FC<TIngredientPreview> = ({
  ingredient,
  index,
  rest,
  withCascade,
}) => {
  const { image_mobile, name } = ingredient;
  const style = withCascade
    ? {
        zIndex: 6 - index,
        marginRight: -16,
      }
    : {
        zIndex: 1,
      };

  return (
    <div className={styles.container} style={style}>
      <img className={styles.image} src={image_mobile} alt={name} />
      {!!rest && index === 5 && (
        <p
          className={`${styles.overlay} text text_type_main-default`}
        >{`+${rest}`}</p>
      )}
    </div>
  );
};
