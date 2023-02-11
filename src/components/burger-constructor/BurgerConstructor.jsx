import styles from "./burger-constructor.module.css";
import {
  Button,
  ConstructorElement,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { ConstructorList } from "./constructor-list/ConstructorList";
import { selectedBun } from "../../utils/data";
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

  return (
    <section className={`${styles.constructor} mt-25`}>
      <ul className={styles.list}>
        <li className="ml-8">
          <ConstructorElement
            type="top"
            isLocked={false}
            text={`${selectedBun.name} (верх)`}
            thumbnail={selectedBun.image}
            price={selectedBun.price}
          />
        </li>
        <ConstructorList ingredients={ingredients} />
        <li className="ml-8">
          <ConstructorElement
            type="bottom"
            isLocked={false}
            text={`${selectedBun.name} (низ)`}
            thumbnail={selectedBun.image}
            price={selectedBun.price}
          />
        </li>
      </ul>
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
  ingredients: PropTypes.arrayOf(ingredientPropTypes).isRequired,
};
