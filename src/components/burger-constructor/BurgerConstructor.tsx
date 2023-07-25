import styles from "./burger-constructor.module.css";
import {
  Button,
  ConstructorElement,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { ConstructorList } from "./constructor-list/ConstructorList";
import React, { FC } from "react";
import { useDrop } from "react-dnd";
import {
  BunType,
  IngredientType,
  ItemTypes,
  Paths,
} from "../../utils/constants";
import { EmptyConstructorCard } from "./constructor-list/empty-constructor-card/EmptyConstructorCard";
import { useNavigate } from "react-router-dom";
import { TConstructorIngredient } from "../../types";
import { useAppDispatch, useAppSelector } from "../../store/hooks/redux";
import {
  increaseQuantity,
  selectBuns,
} from "../../store/actions/BurgerIngredientActions";
import {
  addIngredient,
  selectBun,
} from "../../store/actions/BurgerConstructorActions";
import { placeOrder } from "../../store/actions/OrderDetailsActions";

export const BurgerConstructor: FC = () => {
  const dispatch = useAppDispatch();

  const ingredients = useAppSelector((s) => s.constructorReducer.ingredients);

  const makeOrderRequestInProgress = useAppSelector(
    (s) => s.orderDetailsReducer.makeOrderRequestInProgress
  );

  const isAuthenticated = useAppSelector((s) => s.userSliceReducer.user);

  const navigate = useNavigate();
  const bun = useAppSelector((s) => s.constructorReducer.bun);

  const totalCost = React.useMemo(() => {
    let total = bun ? bun.price * 2 : 0;
    total += ingredients.reduce((prev, item) => prev + item.price, 0);
    return total;
  }, [ingredients, bun]);

  const [, dropTargetRef] = useDrop({
    accept: ItemTypes.INGREDIENT_CARD,
    drop(ingredient: TConstructorIngredient) {
      handleDrop(ingredient);
    },
  });

  function handleDrop(ingredient: TConstructorIngredient) {
    const { _id, type } = ingredient;

    switch (type) {
      case IngredientType.BUN: {
        dispatch(selectBuns(_id));
        dispatch(selectBun(ingredient));
        break;
      }
      default: {
        dispatch(increaseQuantity(_id));
        dispatch(addIngredient(ingredient));
        break;
      }
    }
  }

  function handlePlaceOrder() {
    if (isAuthenticated) {
      if (bun) {
        const orderIngredientIds = [
          bun._id,
          ...ingredients.map((item) => item._id),
          bun._id,
        ];
        dispatch(placeOrder({ ingredients: orderIngredientIds }));
      }
    } else {
      navigate(Paths.LOGIN, {
        replace: true,
      });
    }
  }

  return (
    <section
      data-testid="burgerConstructor"
      className={`${styles.constructor} mt-25`}
      ref={dropTargetRef}
    >
      <div className={styles.list}>
        <div className="ml-8">
          {bun && (
            <ConstructorElement
              type="top"
              isLocked={true}
              text={`${bun.name} (верх)`}
              thumbnail={bun.image}
              price={bun.price}
            />
          )}
          {!bun && <EmptyConstructorCard type={BunType.TOP} />}
        </div>
        <ConstructorList ingredients={ingredients} />
        <div className="ml-8">
          {bun && (
            <ConstructorElement
              type="bottom"
              isLocked={true}
              text={`${bun.name} (низ)`}
              thumbnail={bun.image}
              price={bun.price}
            />
          )}
          {!bun && <EmptyConstructorCard type={BunType.BOTTOM} />}
        </div>
      </div>
      <div className={`${styles.container} mt-10 mr-4`}>
        <span className="text text_type_digits-medium mr-10">
          {totalCost}
          <CurrencyIcon type="primary" />
        </span>
        <Button
          data-testid="orderButton"
          htmlType="button"
          type="primary"
          size="large"
          disabled={!bun || makeOrderRequestInProgress}
          onClick={handlePlaceOrder}
        >
          Оформить заказ
        </Button>
      </div>
    </section>
  );
};
