import React from "react";
import "../../App.css";
import { AppHeader } from "../app-header/AppHeader";
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
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import { HomePage } from "../../pages/home/HomePage";
import styles from "./app.module.css";
import { LoginPage } from "../../pages/login/LoginPage";
import { RegistrationPage } from "../../pages/registration/RegistrationPage";
import { ForgotPasswordPage } from "../../pages/forgot-password/ForgotPasswordPage";
import { ResetPasswordPage } from "../../pages/reset-password/ResetPasswordPage";
import { ProfilePage } from "../../pages/profile/ProfilePage";
import ProtectedRoute from "../protected-route/ProtectedRoute";
import { ProfileEditor } from "../profile/editor/ProfiltEditor";
import { ProfileOrders } from "../profile/orders/ProfileOrders";
import { Paths } from "../../utils/constants";
import { getUser } from "../../services/actions/profile";
import { NotFoundPage } from "../../pages/not-found/NotFoundPage";

export const App = () => {
  const dispatch = useDispatch();

  const ingredientDetailsModal = useSelector(
    (state) => state.ingredientDetails.modalIsOpen
  );
  const orderDetailsModal = useSelector(
    (state) => state.orderDetails.modalIsOpen
  );

  const navigate = useNavigate();
  const location = useLocation();
  const fromCard = location.state?.fromCard;

  function closeIngredientDetailsModal() {
    dispatch({ type: CLOSE_INGREDIENT_DETAILS_MODAL });
    dispatch({ type: DESELECT_INGREDIENT });
    navigate(Paths.HOME, {
      replace: true,
      state: {
        ...(location.state || {}),
        fromCard: false,
      },
    });
  }

  function closeOrderDetailsModal() {
    dispatch({ type: CLOSE_ORDER_DETAILS_MODAL });
  }

  React.useEffect(() => {
    dispatch(getIngredients());
    dispatch(getUser(true));
  }, [dispatch]);

  return (
    <div>
      <AppHeader />
      <main className={styles.container}>
        <Routes location={fromCard || location}>
          <Route path={Paths.HOME} element={<HomePage />} />
          <Route path={Paths.LOGIN} element={<LoginPage />} />
          <Route path={Paths.REGISTER} element={<RegistrationPage />} />
          <Route
            path={Paths.FORGOT_PASSWORD}
            element={<ForgotPasswordPage />}
          />
          <Route path={Paths.RESET_PASSWORD} element={<ResetPasswordPage />} />
          <Route
            path={Paths.PROFILE}
            element={
              <ProtectedRoute>
                <ProfilePage />
              </ProtectedRoute>
            }
          >
            <Route path={Paths.PROFILE} element={<ProfileEditor />}></Route>
            <Route
              path={Paths.PROFILE + Paths.ORDERS}
              element={<ProfileOrders />}
            />
          </Route>
          <Route path="/:ingredients/:id" element={<IngredientDetails />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>

      {fromCard && (
        <Routes>
          <Route
            path="/:ingredients/:id"
            element={
              <Modal
                title="Детали ингридиента"
                closeModal={closeIngredientDetailsModal}
              >
                <IngredientDetails />
              </Modal>
            }
          />
        </Routes>
      )}

      {orderDetailsModal && (
        <Modal closeModal={closeOrderDetailsModal}>
          <OrderDetails />
        </Modal>
      )}
    </div>
  );
};
