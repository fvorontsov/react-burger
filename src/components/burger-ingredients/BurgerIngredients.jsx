import styles from "./burger-ingredients.module.css";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import { IngredientsList } from "./ingredients-list/IngredientsList";
import React from "react";
import { Modal } from "../modal/Modal";
import { IngredientDetails } from "./ingredient-details/IngredientDetails";
import PropTypes from "prop-types";
import { ingredientPropTypes } from "../../utils/propTypes";

export const BurgerIngredients = ({ ingredients }) => {
  const bun = React.useMemo(
    () => ingredients.filter((i) => i.type === "bun"),
    [ingredients]
  );
  const sauce = React.useMemo(
    () => ingredients.filter((i) => i.type === "sauce"),
    [ingredients]
  );
  const main = React.useMemo(
    () => ingredients.filter((i) => i.type === "main"),
    [ingredients]
  );

  const doNothing = () => {};

  const [isOpen, setIsOpen] = React.useState(false);
  const [selectedIngredient, setSelectedIngredient] = React.useState({});

  const handleIngredientClick = (ingredient) => {
    setIsOpen(true);
    setSelectedIngredient(ingredient);
  };

  const closeModal = () => {
    setIsOpen(false);
    setSelectedIngredient({});
  };

  return (
    <section className="mt-10">
      <p className="text text_type_main-large mb-5">Соберите бургер</p>
      <div className={styles.tabs}>
        <Tab active value={"one"} onClick={doNothing}>
          Булки
        </Tab>
        <Tab active={false} value={"two"} onClick={doNothing}>
          Соусы
        </Tab>
        <Tab active={false} value={"three"} onClick={doNothing}>
          Начинки
        </Tab>
      </div>
      <div className={`${styles.container} custom-scroll mt-10`}>
        <IngredientsList
          title="Булки"
          ingredients={bun}
          onElementClick={handleIngredientClick}
        />
        <IngredientsList
          title="Соусы"
          ingredients={sauce}
          onElementClick={handleIngredientClick}
        />
        <IngredientsList
          title="Начинки"
          ingredients={main}
          onElementClick={handleIngredientClick}
        />
      </div>
      <Modal title="Детали ингредиента" isOpen={isOpen} closeModal={closeModal}>
        <IngredientDetails ingredient={selectedIngredient} />
      </Modal>
    </section>
  );
};

BurgerIngredients.propTypes = {
  ingredients: PropTypes.arrayOf(ingredientPropTypes).isRequired,
};
