import styles from "./ingredient-details.module.css";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { selectIngredient } from "../../../services/actions/ingredient-details";

const ListItem = ({ text }) => {
  return (
    <li
      className={`${styles.item} text text_type_main-default text_color_inactive`}
    >
      {text}
    </li>
  );
};

ListItem.propTypes = {
  text: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

export const IngredientDetails = () => {
  const { selectedIngredient } = useSelector(
    (state) => state.ingredientDetails
  );
  const { ingredients } = useSelector((state) => state.burgerIngredients);
  const dispatch = useDispatch();
  const params = useParams();

  useEffect(() => {
    if (!selectedIngredient._id) {
      if (ingredients.length) {
        const viewedIngredient = ingredients.find(
          (item) => item._id === params.id
        );
        dispatch(selectIngredient(viewedIngredient));
      }
    }
  }, [ingredients]);

  const { name, calories, carbohydrates, fat, proteins, image } =
    selectedIngredient;

  return (
    <figure className={styles.container}>
      <img className={styles.image} src={image} alt={name} />
      <figcaption className={styles.header}>
        <h1 className="text text_type_main-medium mt-4 mb-8">{name}</h1>
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
      </figcaption>
    </figure>
  );
};
