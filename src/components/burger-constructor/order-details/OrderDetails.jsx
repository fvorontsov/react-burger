import styles from "./order-details.module.css";
import image from "../../../images/done.svg";

export const OrderDetails = () => {
  return (
    <div className={`${styles.container} mt-30 mb-30`}>
      <p className="text text_type_digits-large">42</p>
      <p className="text text_type_main-medium mt-8 mb-15">
        Идентификатор заказа
      </p>
      <img src={image} alt="Утвердительный знак" />
      <p className="text text_type_main-default mt-15">
        Ваш заказ начали готовить
      </p>
      <p className="text text_type_main-default text_color_inactive mt-2">
        Дождитесь готовности на орбитальной станции
      </p>
    </div>
  );
};
