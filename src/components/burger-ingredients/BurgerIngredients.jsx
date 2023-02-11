import styles from "./burger-ingredients.module.css";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import { IngredientsList } from "./ingredients-list/IngredientsList";
import React from "react";
import { Modal } from "../modal/Modal";
import { IngredientDetails } from "./ingredient-details/IngredientDetails";
import PropTypes from "prop-types";
import { ingredientPropTypes } from "../../utils/propTypes";
import { INGREDIENT_TYPES } from "../../utils/data";

export const BurgerIngredients = ({ ingredients }) => {
  const bun = React.useMemo(
    () => ingredients.filter((i) => i.type === INGREDIENT_TYPES.BUN),
    [ingredients]
  );
  const sauce = React.useMemo(
    () => ingredients.filter((i) => i.type === INGREDIENT_TYPES.SAUCE),
    [ingredients]
  );
  const main = React.useMemo(
    () => ingredients.filter((i) => i.type === INGREDIENT_TYPES.MAIN),
    [ingredients]
  );

  const bunRef = React.useRef(null);
  const sauceRef = React.useRef(null);
  const mainRef = React.useRef(null);

  const [isOpen, setIsOpen] = React.useState(false);
  const [selectedIngredient, setSelectedIngredient] = React.useState({});
  const [currentTab, setCurrentTab] = React.useState(INGREDIENT_TYPES.BUN);

  function handleTabClick(tab) {
    setCurrentTab(tab);
    switch (tab) {
      case INGREDIENT_TYPES.BUN:
        scrollTo(bunRef);
        break;
      case INGREDIENT_TYPES.SAUCE:
        scrollTo(sauceRef);
        break;
      case INGREDIENT_TYPES.MAIN:
        scrollTo(mainRef);
        break;
      default:
        break;
    }
  }

  const scrollTo = (ref) => {
    ref.current.scrollIntoView({
      behavior: "smooth",
    });
  };

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
      <h1 className="text text_type_main-large mb-5">Соберите бургер</h1>
      <div className={styles.tabs}>
        <Tab
          active={currentTab === INGREDIENT_TYPES.BUN}
          value={INGREDIENT_TYPES.BUN}
          onClick={handleTabClick}
        >
          Булки
        </Tab>
        <Tab
          active={currentTab === INGREDIENT_TYPES.SAUCE}
          value={INGREDIENT_TYPES.SAUCE}
          onClick={handleTabClick}
        >
          Соусы
        </Tab>
        <Tab
          active={currentTab === INGREDIENT_TYPES.MAIN}
          value={INGREDIENT_TYPES.MAIN}
          onClick={handleTabClick}
        >
          Начинки
        </Tab>
      </div>
      <div className={`${styles.container} custom-scroll mt-10`}>
        <IngredientsList
          ref={bunRef}
          title="Булки"
          ingredients={bun}
          onElementClick={handleIngredientClick}
        />
        <IngredientsList
          ref={sauceRef}
          title="Соусы"
          ingredients={sauce}
          onElementClick={handleIngredientClick}
        />
        <IngredientsList
          ref={mainRef}
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
  ingredients: PropTypes.arrayOf(ingredientPropTypes.isRequired).isRequired,
};
