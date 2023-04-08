import { BurgerIngredients } from "../../components/burger-ingredients/BurgerIngredients";
import { BurgerConstructor } from "../../components/burger-constructor/BurgerConstructor";
import { HTML5Backend } from "react-dnd-html5-backend";
import { DndProvider } from "react-dnd";

export const HomePage = () => {
  return (
    <DndProvider backend={HTML5Backend}>
      <BurgerIngredients />
      <BurgerConstructor />
    </DndProvider>
  );
};
