import { ingredientPropTypes } from "../../../utils/propTypes";
import styles from "./ingredient-details.module.css";
import PropTypes from "prop-types";

const ListItem = ({ text }) => {
  return (
    <li className={styles.item}>
      <p className="text text_type_main-default text_color_inactive">{text}</p>
    </li>
  );
};

ListItem.propTypes = {
  text: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

export const IngredientDetails = ({ ingredient }) => {
  const { name, calories, carbohydrates, fat, proteins, image } = ingredient;
  return (
    <div className={styles.container}>
      <img className={styles.image} src={image} alt={name} />
      <h1 className={styles.header}>
        <p className="text text_type_main-medium mt-4 mb-8">{name}</p>
        <ul className={styles.list}>
          <ListItem text="Калории,ккал" />
          <ListItem text="Белки, г" />
          <ListItem text="Жиры, г" />
          <ListItem text="Углеводы, г" />
          <ListItem text={calories} />
          <ListItem text={proteins} />
          <ListItem text={fat} />
          <ListItem text={carbohydrates} />
        </ul>
      </h1>
    </div>
  );
};

IngredientDetails.propTypes = {
  ingredient: ingredientPropTypes.isRequired,
};
