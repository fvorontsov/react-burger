import styles from "./burger-ingredients.module.css";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import { IngredientsList } from "./ingredients-list/IngredientsList";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  OPEN_INGREDIENT_DETAILS_MODAL,
  selectIngredient,
} from "../../services/actions/ingredient-details";
import { CHANGE_CURRENT_TAB } from "../../services/actions/burger-ingredients";
import { IngredientType } from "../../utils/constants";

export const BurgerIngredients = () => {
  const dispatch = useDispatch();
  const { ingredients, currentTab } = useSelector(
    (state) => state.burgerIngredients
  );

  const bun = React.useMemo(
    () => ingredients.filter((i) => i.type === IngredientType.BUN),
    [ingredients]
  );
  const sauce = React.useMemo(
    () => ingredients.filter((i) => i.type === IngredientType.SAUCE),
    [ingredients]
  );
  const main = React.useMemo(
    () => ingredients.filter((i) => i.type === IngredientType.MAIN),
    [ingredients]
  );

  const bunRef = React.useRef(null);
  const sauceRef = React.useRef(null);
  const mainRef = React.useRef(null);

  function handleIngredientCardClick(ingredient) {
    dispatch(selectIngredient(ingredient));
    dispatch({
      type: OPEN_INGREDIENT_DETAILS_MODAL,
    });
  }

  function handleTabClick(tab) {
    dispatch({
      type: CHANGE_CURRENT_TAB,
      tab,
    });
    switch (tab) {
      case IngredientType.BUN:
        scrollTo(bunRef);
        break;
      case IngredientType.SAUCE:
        scrollTo(sauceRef);
        break;
      case IngredientType.MAIN:
        scrollTo(mainRef);
        break;
      default:
        break;
    }
  }

  function handleScroll(event) {
    const scrollTop = event.target.scrollTop;

    const sauceTop =
      sauceRef.current.getBoundingClientRect().top -
      bunRef.current.getBoundingClientRect().top;
    const bunTop =
      mainRef.current.getBoundingClientRect().top -
      bunRef.current.getBoundingClientRect().top;

    if (scrollTop < sauceTop) {
      dispatch({
        type: CHANGE_CURRENT_TAB,
        tab: IngredientType.BUN,
      });
    } else if (scrollTop >= bunTop) {
      dispatch({
        type: CHANGE_CURRENT_TAB,
        tab: IngredientType.MAIN,
      });
    } else {
      dispatch({
        type: CHANGE_CURRENT_TAB,
        tab: IngredientType.SAUCE,
      });
    }
  }

  const scrollTo = (ref) => {
    ref.current.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <section className="mt-10">
      <h1 className="text text_type_main-large mb-5">Соберите бургер</h1>
      <div className={styles.tabs}>
        <Tab
          active={currentTab === IngredientType.BUN}
          value={IngredientType.BUN}
          onClick={handleTabClick}
        >
          Булки
        </Tab>
        <Tab
          active={currentTab === IngredientType.SAUCE}
          value={IngredientType.SAUCE}
          onClick={handleTabClick}
        >
          Соусы
        </Tab>
        <Tab
          active={currentTab === IngredientType.MAIN}
          value={IngredientType.MAIN}
          onClick={handleTabClick}
        >
          Начинки
        </Tab>
      </div>
      <div
        className={`${styles.container} custom-scroll mt-10`}
        onScroll={handleScroll}
      >
        <IngredientsList
          ref={bunRef}
          title="Булки"
          ingredients={bun}
          onElementClick={handleIngredientCardClick}
        />
        <IngredientsList
          ref={sauceRef}
          title="Соусы"
          ingredients={sauce}
          onElementClick={handleIngredientCardClick}
        />
        <IngredientsList
          ref={mainRef}
          title="Начинки"
          ingredients={main}
          onElementClick={handleIngredientCardClick}
        />
      </div>
    </section>
  );
};
