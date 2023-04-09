import styles from "./burger-constructor.module.css";
import {
  Button,
  ConstructorElement,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { ConstructorList } from "./constructor-list/ConstructorList";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  ADD_INGREDIENT,
  SELECT_BUN,
} from "../../services/actions/burger-constructor";
import {
  INCREASE_INGREDIENT_QUANTITY,
  SELECT_BUNS,
} from "../../services/actions/burger-ingredients";
import { placeOrder } from "../../services/actions/order-details";
import { useDrop } from "react-dnd";
import {
  BunType,
  IngredientType,
  ItemTypes,
  Paths,
} from "../../utils/constants";
import { EmptyConstructorCard } from "./constructor-list/empty-constructor-card/EmptyConstructorCard";
import { useNavigate } from "react-router-dom";

export const BurgerConstructor = () => {
  const dispatch = useDispatch();

  const ingredients = useSelector(
    (state) => state.burgerConstructor.ingredients
  );

  const makeOrderRequestInProgress = useSelector(
      (state) => state.orderDetails.makeOrderRequestInProgress
  )

  const { isAuthenticated } = useSelector((state) => state.access);

  const navigate = useNavigate();
  const { bun } = useSelector((state) => state.burgerConstructor);

  const totalCost = React.useMemo(() => {
    return (
      ingredients.reduce((acc, cur) => {
        if (cur.price) {
          return acc + cur.price;
        }
        return acc;
      }, 0) + (bun ? 2 * bun.price : 0)
    );
  }, [ingredients, bun]);

  const [, dropTargetRef] = useDrop({
    accept: ItemTypes.INGREDIENT_CARD,
    drop(ingredient) {
      handleDrop(ingredient);
    },
  });

  function handleDrop(ingredient) {
    const { _id, type } = ingredient;

    switch (type) {
      case IngredientType.BUN: {
        dispatch({
          type: SELECT_BUNS,
          _id: _id,
        });
        dispatch({
          type: SELECT_BUN,
          bun: ingredient,
        });
        break;
      }
      default: {
        dispatch({
          type: INCREASE_INGREDIENT_QUANTITY,
          _id: _id,
        });
        dispatch({
          type: ADD_INGREDIENT,
          ingredient,
        });
        break;
      }
    }
  }

  function handlePlaceOrder() {
    if (isAuthenticated) {
      const orderIngredientIds = [
        bun._id,
        ...ingredients.map((ingredient) => ingredient._id),
        bun._id,
      ];
      dispatch(placeOrder(orderIngredientIds, true));
    } else {
      navigate(Paths.LOGIN, {
        replace: true,
      });
    }
  }

  return (
    <section className={`${styles.constructor} mt-25`} ref={dropTargetRef}>
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
