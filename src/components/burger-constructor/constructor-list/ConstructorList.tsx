import styles from "./consutrctor-list.module.css";
import { ConstructorCard } from "./constructor-card/ConstructorCard";
import { FC } from "react";
import { TConstructorList } from "../../../types";

export const ConstructorList: FC<TConstructorList> = ({ ingredients }) => {
  return (
    <div className={`${styles.container} pr-2 custom-scroll`}>
      {ingredients.map((ingredient, index) => {
        const { uuid } = ingredient;
        return (
          <ConstructorCard key={uuid} ingredient={ingredient} index={index} />
        );
      })}
    </div>
  );
};
