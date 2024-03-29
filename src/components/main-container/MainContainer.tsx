import { BurgerIngredients } from "../burger-ingredients/BurgerIngredients";
import { BurgerConstructor } from "../burger-constructor/BurgerConstructor";
import styles from "./main-container.module.css";
import { HTML5Backend } from "react-dnd-html5-backend";
import { DndProvider } from "react-dnd";
import { FC } from "react";

export const MainContainer: FC = () => {
  return (
    <main className={styles.container}>
      <DndProvider backend={HTML5Backend}>
        <BurgerIngredients />
        <BurgerConstructor />
      </DndProvider>
    </main>
  );
};
