import React, { FC } from "react";
import { Link } from "react-router-dom";
import styles from "./not-found.module.css";
import { Paths } from "../../utils/constants";

export const NotFoundPage: FC = () => {
  return (
    <main className={`${styles.main} mt-30`}>
      <h1 className="text text_type_digits-large mt-30">404</h1>
      <p className="text text_type_main-medium mt-5">Не сдавайся</p>
      <Link to={Paths.HOME} className={`${styles.link} mt-5`}>
        На главную
      </Link>
    </main>
  );
};
