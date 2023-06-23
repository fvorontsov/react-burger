import React, { FC } from "react";
import "../../App.css";
import { AppHeader } from "../app-header/AppHeader";
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
import { ProfileEditor } from "../profile/editor/ProfiltEditor";
import { ProfileOrders } from "../profile/orders/ProfileOrders";
import { Paths } from "../../utils/constants";
import { NotFoundPage } from "../../pages/not-found/NotFoundPage";
import { ProtectedRoute } from "../protected-route/ProtectedRoute";
import { FeedPage } from "../../pages/feed/feed";
import { useAppDispatch, useAppSelector } from "../../store/hooks/redux";
import { loadIngredients } from "../../store/actions/BurgerIngredientActions";
import { getUserProfile } from "../../utils/api";
import { setIsAuthChecked, setUser } from "../../store/actions/UserActions";
import { logErrorDescription } from "../../utils/utils";
import { closeOrderDetailsModal } from "../../store/actions/OrderDetailsActions";
import { OrderInfo } from "../order-info/OrderInfo";

export const App: FC = () => {
  const dispatch = useAppDispatch();

  const orderDetailsModal = useAppSelector(
    (s) => s.orderDetailsReducer.modalIsOpen
  );

  const navigate = useNavigate();
  const location = useLocation();
  const ingredientModal = location.state?.ingredientCard;
  const orderInfoModal = location.state?.orderCard;

  function closeIngredientDetailsModal() {
    navigate(Paths.HOME, {
      replace: true,
      state: {
        ...(location.state || {}),
        ingredientCard: false,
      },
    });
  }

  function closeOrderModal() {
    dispatch(closeOrderDetailsModal());
  }

  React.useEffect(() => {
    dispatch(loadIngredients());
    if (localStorage.getItem("accessToken")) {
      getUserProfile()
        .then((user) => dispatch(setUser(user)))
        .catch((error) => {
          localStorage.removeItem("accessToken");
          localStorage.removeItem("refreshToken");
          logErrorDescription(error);
          dispatch(setIsAuthChecked(true));
        });
    } else {
      dispatch(setIsAuthChecked(true));
    }
  }, [dispatch]);

  return (
    <div>
      <AppHeader />
      <main className={styles.container}>
        <Routes location={ingredientModal || orderInfoModal || location}>
          <Route path={Paths.HOME} element={<HomePage />} />
          <Route path={Paths.LOGIN} element={<LoginPage />} />
          <Route path={Paths.REGISTER} element={<RegistrationPage />} />
          <Route path={Paths.FEED} element={<FeedPage />} />
          <Route path={Paths.FEED + "/:id"} element={<OrderInfo />} />
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

      {ingredientModal && (
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
        <Modal closeModal={closeOrderModal}>
          <OrderDetails />
        </Modal>
      )}

      {orderInfoModal && (
          <Routes>
            <Route
                path="/:feed/:id"
                element={
                  <Modal
                      closeModal={closeIngredientDetailsModal}
                  >
                    <OrderInfo modal={true}/>
                  </Modal>
                }
            />
          </Routes>
      )}
    </div>
  );
};
