import styles from "./burger-ingredients.module.css";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import { IngredientsList } from "./ingredients-list/IngredientsList";
import React, { FC, SyntheticEvent } from "react";
import { useDispatch } from "react-redux";
import { IngredientType } from "../../utils/constants";
import { TCountedIngredient } from "../../types";
import {
  openIngredientDetailsModal,
  selectIngredient,
} from "../../store/actions/IngredientDetailsActions";
import { useAppSelector } from "../../store/hooks/redux";

export const BurgerIngredients: FC = () => {
  const dispatch = useDispatch();
  const ingredients = useAppSelector((s) => s.ingredientsReducer.ingredients);

  const [currentTab, setCurrentTab] = React.useState<string>(
    IngredientType.BUN
  );

  const bun = React.useMemo(
    () =>
      ingredients.filter(
        (i: TCountedIngredient) => i.type === IngredientType.BUN
      ),
    [ingredients]
  );
  const sauce = React.useMemo(
    () =>
      ingredients.filter(
        (i: TCountedIngredient) => i.type === IngredientType.SAUCE
      ),
    [ingredients]
  );
  const main = React.useMemo(
    () =>
      ingredients.filter(
        (i: TCountedIngredient) => i.type === IngredientType.MAIN
      ),
    [ingredients]
  );

  const bunRef = React.useRef<HTMLDivElement>(null);
  const sauceRef = React.useRef<HTMLDivElement>(null);
  const mainRef = React.useRef<HTMLDivElement>(null);

  function handleIngredientCardClick(ingredient: TCountedIngredient) {
    dispatch(selectIngredient(ingredient));
    dispatch(openIngredientDetailsModal());
  }

  function handleTabClick(tab: string) {
    setCurrentTab(tab);
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

  function handleScroll(event: SyntheticEvent) {
    const target = event.target as HTMLDivElement;
    const scrollTop = target.scrollTop;

    if (
      sauceRef &&
      sauceRef.current &&
      bunRef &&
      bunRef.current &&
      mainRef &&
      mainRef.current
    ) {
      const sauceScrollTop =
        sauceRef.current.getBoundingClientRect().top -
        bunRef.current.getBoundingClientRect().top;
      const mainScrollTop =
        mainRef.current.getBoundingClientRect().top -
        bunRef.current.getBoundingClientRect().top;

      if (scrollTop >= mainScrollTop) {
        setCurrentTab(IngredientType.MAIN);
      } else if (scrollTop < sauceScrollTop) {
        setCurrentTab(IngredientType.BUN);
      } else {
        setCurrentTab(IngredientType.SAUCE);
      }
    }
  }

  const scrollTo = (ref: React.RefObject<HTMLDivElement>) => {
    if (ref.current) {
      ref.current.scrollIntoView({
        behavior: "smooth",
      });
    }
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
