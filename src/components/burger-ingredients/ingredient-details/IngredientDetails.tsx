import styles from "./ingredient-details.module.css";
import { useDispatch, useSelector } from "react-redux";
import { FC, useEffect } from "react";
import { useParams } from "react-router-dom";
import { selectIngredient } from "../../../services/actions/ingredient-details";
import { TCountedIngredient } from "../../../types";

const ListItem: FC<{ text: string }> = ({ text }) => {
  return (
    <li
      className={`${styles.item} text text_type_main-default text_color_inactive`}
    >
      {text}
    </li>
  );
};

export const IngredientDetails: FC = () => {
  const { selectedIngredient } = useSelector(
    (state: any) => state.ingredientDetails
  );
  const { ingredients } = useSelector((state: any) => state.burgerIngredients);
  const dispatch = useDispatch<any>();
  const params = useParams();

  useEffect(() => {
    if (!selectedIngredient._id) {
      if (ingredients.length) {
        const viewedIngredient = ingredients.find(
          (item: TCountedIngredient) => item._id === params.id
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
