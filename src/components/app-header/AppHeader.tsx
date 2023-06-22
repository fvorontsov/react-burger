import styles from "./app-header.module.css";
import {
  BurgerIcon,
  ListIcon,
  Logo,
  ProfileIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { Link, useLocation } from "react-router-dom";
import { Paths } from "../../utils/constants";
import { FC } from "react";

export const AppHeader: FC = () => {
  const location = useLocation();

  return (
    <header className={styles.header}>
      <nav className={styles.nav_body}>
        <ul className={styles.main_list}>
          <li className={styles.main_list_item}>
            <ul className={styles.sub_list}>
              <li className={`${styles.link_container} mr-2`}>
                <Link to={Paths.HOME} className={`${styles.link} ml-5`}>
                  <BurgerIcon
                    type={
                      location.pathname === Paths.HOME ? "primary" : "secondary"
                    }
                  />
                  <p
                    className={`text text_type_main-default ml-2 ${
                      location.pathname === Paths.HOME
                        ? styles.link_text_active
                        : styles.link_text
                    }`}
                  >
                    Конструктор
                  </p>
                </Link>
              </li>

              <li className={styles.link_container}>
                <Link to={Paths.FEED} className={`${styles.link} ml-5`}>
                  <ListIcon
                    type={
                      location.pathname.startsWith(Paths.FEED)
                        ? "primary"
                        : "secondary"
                    }
                  />
                  <p
                    className={`text text_type_main-default ml-2 ${
                      location.pathname.startsWith(Paths.FEED)
                        ? styles.link_text_active
                        : styles.link_text
                    }`}
                  >
                    Лента заказов
                  </p>
                </Link>
              </li>
            </ul>
          </li>

          <li className={styles.main_list_item}>
            <Link to={Paths.HOME} className={styles.link}>
              <Logo />
            </Link>
          </li>

          <li className={styles.main_list_item}>
            <Link to={Paths.PROFILE} className={`${styles.link} ml-5`}>
              <ProfileIcon
                type={
                  location.pathname.startsWith(Paths.PROFILE)
                    ? "primary"
                    : "secondary"
                }
              />
              <p
                className={`text text_type_main-default ml-2 ${
                  location.pathname.startsWith(Paths.PROFILE)
                    ? styles.link_text_active
                    : styles.link_text
                }`}
              >
                Личный кабинет
              </p>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
