import styles from "./burger-constructor.module.css";
import {
  Button,
  ConstructorElement,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { ConstructorList } from "./constructor-list/ConstructorList";
import { INGREDIENT_TYPES } from "../../utils/data";
import React from "react";
import { Modal } from "../modal/Modal";
import { OrderDetails } from "./order-details/OrderDetails";
import PropTypes from "prop-types";
import { ingredientPropTypes } from "../../utils/propTypes";

export const BurgerConstructor = ({ ingredients }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  const handlePlaceOrder = () => {
    setIsOpen(true);
  };

  const selectedBun = React.useMemo(() => {
    const buns = ingredients.filter((i) => i.type === INGREDIENT_TYPES.BUN);
    if (buns.length === 0) {
      return {};
    }
    return buns[Math.floor(Math.random() * buns.length)];
  }, [ingredients]);

  return (
    <section className={`${styles.constructor} mt-25`}>
      <div className={styles.list}>
        <div className="ml-8">
          <ConstructorElement
            type="top"
            isLocked={false}
            text={`${selectedBun.name} (верх)`}
            thumbnail={selectedBun.image}
            price={selectedBun.price}
          />
        </div>
        <ConstructorList ingredients={ingredients} />
        <div className="ml-8">
          <ConstructorElement
            type="bottom"
            isLocked={false}
            text={`${selectedBun.name} (низ)`}
            thumbnail={selectedBun.image}
            price={selectedBun.price}
          />
        </div>
      </div>
      <div className={`${styles.container} mt-10 mr-4`}>
        <span className="text text_type_digits-medium mr-10">
          500
          <CurrencyIcon type="primary" />
        </span>
        <Button
          htmlType="button"
          type="primary"
          size="large"
          onClick={handlePlaceOrder}
        >
          Оформить заказ
        </Button>
      </div>
      <Modal isOpen={isOpen} closeModal={handleCloseModal}>
        <OrderDetails />
      </Modal>
    </section>
  );
};

BurgerConstructor.propTypes = {
  ingredients: PropTypes.arrayOf(ingredientPropTypes.isRequired).isRequired,
};
