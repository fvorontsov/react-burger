import React from "react";
import "../../App.css";
import { AppHeader } from "../app-header/AppHeader";
import { MainContainer } from "../main-container/MainContainer";
import { useDispatch, useSelector } from "react-redux";
import { getIngredients } from "../../services/actions/burger-ingredients";
import {
  CLOSE_INGREDIENT_DETAILS_MODAL,
  DESELECT_INGREDIENT,
} from "../../services/actions/ingredient-details";
import { CLOSE_ORDER_DETAILS_MODAL } from "../../services/actions/order-details";
import { Modal } from "../modal/Modal";
import { IngredientDetails } from "../burger-ingredients/ingredient-details/IngredientDetails";
import { OrderDetails } from "../burger-constructor/order-details/OrderDetails";

export const App = () => {
  const dispatch = useDispatch();

  const ingredientDetailsModal = useSelector(
    (state) => state.ingredientDetails.modalIsOpen
  );
  const orderDetailsModal = useSelector(
    (state) => state.orderDetails.modalIsOpen
  );

  function closeIngredientDetailsModal() {
    dispatch({ type: CLOSE_INGREDIENT_DETAILS_MODAL });
    dispatch({ type: DESELECT_INGREDIENT });
  }

  function closeOrderDetailsModal() {
    dispatch({ type: CLOSE_ORDER_DETAILS_MODAL });
  }

  React.useEffect(() => {
    dispatch(getIngredients());
  }, [dispatch]);

  return (
    <div>
      <AppHeader />
      <MainContainer />
      {ingredientDetailsModal && (
        <Modal
          closeModal={closeIngredientDetailsModal}
          title="Детали ингредиента"
        >
          <IngredientDetails />
        </Modal>
      )}
      {orderDetailsModal && (
        <Modal closeModal={closeOrderDetailsModal}>
          <OrderDetails />
        </Modal>
      )}
    </div>
  );
};
