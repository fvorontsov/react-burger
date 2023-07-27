import styles from "./ingredients-list.module.css";
import React from "react";
import { IngredientCard } from "./ingredient-card/IngredientCard";
import { TIngredientsList } from "../../../types";

export const IngredientsList = React.forwardRef<
  HTMLDivElement,
  TIngredientsList
>(({ title, ingredients, onElementClick }, ref) => {
  return (
    <>
      <h2 ref={ref} className="text text_type_main-medium">
        {title}
      </h2>
      <ul data-testid="ingredients-list" className={`${styles.list} mt-6 mb-10 ml-4 mr-4`}>
        {ingredients.map((ingredient) => {
          return (
            <IngredientCard
              key={ingredient._id}
              ingredient={ingredient}
              onElementClick={onElementClick}
            ></IngredientCard>
          );
        })}
      </ul>
    </>
  );
});
