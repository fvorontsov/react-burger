import styles from "./empty-constructor-card.module.css";
import { BunType } from "../../../../utils/constants";
import { FC } from "react";

export const EmptyConstructorCard: FC<{ type: string }> = ({ type }) => {
  return (
    <div
      className={`${styles.card} ${
        type === BunType.TOP ? styles.card_top : styles.card_bottom
      }`}
    >
      <p className="text text_type_main-default text_color_inactive">
        Выберите булку
      </p>
    </div>
  );
};
