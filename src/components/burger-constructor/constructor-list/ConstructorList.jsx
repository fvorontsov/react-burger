import styles from "./consutrctor-list.module.css";
import {
  ConstructorElement,
  DragIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from "prop-types";
import { ingredientPropTypes } from "../../../utils/propTypes";

export const ConstructorList = ({ ingredients }) => {
  return (
    <div className={`${styles.container} pr-2 custom-scroll`}>
      {ingredients.map((ingredient) => {
        const { _id, name, price, image } = ingredient;
        return (
          <div className={styles.item} key={_id}>
            <DragIcon type={"primary"} />
            <ConstructorElement text={name} thumbnail={image} price={price} />
          </div>
        );
      })}
    </div>
  );
};

ConstructorList.propTypes = {
  ingredients: PropTypes.arrayOf(ingredientPropTypes.isRequired).isRequired,
};
