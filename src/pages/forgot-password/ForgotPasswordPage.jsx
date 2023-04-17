import React from "react";
import styles from "../login/login.module.css";
import {
  Button,
  Input,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { Inputs, Paths } from "../../utils/constants";
import { Link, Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { forgotPassword } from "../../services/actions/forgot-password";

export const ForgotPasswordPage = () => {
  const dispatch = useDispatch();

  const { isAuthenticated, forgotPasswordRequestSucceed } = useSelector(
    (state) => state.access
  );

  const [formValue, setFormValue] = React.useState({
    email: "",
  });

  function onFormChange(evt) {
    setFormValue({
      ...formValue,
      [evt.target.name]: evt.target.value,
    });
  }

  function onSubmit(evt) {
    evt.preventDefault();
    dispatch(forgotPassword(formValue));
  }

  if (forgotPasswordRequestSucceed) {
    return <Navigate to={Paths.RESET_PASSWORD} />;
  } else if (isAuthenticated) {
    return <Navigate to={Paths.HOME} />;
  }

  return (
    <div className={styles.container}>
      <h2 className={`text text_type_main-medium mb-6`}>
        Восстановление пароля
      </h2>
      <form className={styles.form}>
        <div className="mb-6">
          <Input
            type={Inputs.Types.EMAIL}
            placeholder={Inputs.Placeholders.EMAIL}
            name={Inputs.Names.EMAIL}
            onChange={onFormChange}
            value={formValue.email}
          />
        </div>
        <Button type="primary" size="large" onClick={onSubmit} htmlType={"submit"}>
          Восстановить
        </Button>
      </form>

      <p className="text text_type_main-default text_color_inactive mt-20">
        Вспомнили пароль?
        <Link to={Paths.LOGIN} className={styles.link}>
          {" "}
          Войти
        </Link>
      </p>
    </div>
  );
};
