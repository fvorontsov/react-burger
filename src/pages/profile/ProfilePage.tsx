import { useDispatch } from "react-redux";
import React, { FC } from "react";
import styles from "./profile.module.css";
import { NavLink, Outlet } from "react-router-dom";
import { Paths } from "../../utils/constants";
import { clear } from "../../store/actions/UserActions";
import { logout } from "../../utils/api";
import { logErrorDescription } from "../../utils/utils";

export const ProfilePage: FC = () => {
  const dispatch = useDispatch<any>();

  function onLogout() {
    logout()
      .then(() => dispatch(clear()))
      .catch((error) => logErrorDescription(error));
  }

  return (
    <main className={styles.page}>
      <nav>
        <ul className={styles.list}>
          <li className={styles.item}>
            <NavLink
              className={({ isActive }) =>
                `${
                  styles.link
                } text text_type_main-medium text_color_inactive ${
                  isActive && styles.active
                }`
              }
              to={Paths.PROFILE}
            >
              Профиль
            </NavLink>
          </li>
          <li className={styles.item}>
            <NavLink
              className={({ isActive }) =>
                `${
                  styles.link
                } text text_type_main-medium text_color_inactive ${
                  isActive && styles.active
                }`
              }
              to={Paths.PROFILE_ORDERS}
            >
              История заказов
            </NavLink>
          </li>
          <li className={styles.item}>
            <button
              className={`${styles.logout} text text_type_main-medium text_color_inactive`}
              onClick={onLogout}
            >
              Выход
            </button>
          </li>
        </ul>
        <p
          className={`${styles.text} text text_type_main-default text_color_inactive mt-20`}
        >
          В этом разделе вы можете изменить свои персональные данные
        </p>
      </nav>

      <Outlet />
    </main>
  );
};
