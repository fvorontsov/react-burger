import styles from "./login.module.css";
import { Inputs, Paths } from "../../utils/constants";
import {
  Button,
  Input,
  PasswordInput,
} from "@ya.praktikum/react-developer-burger-ui-components";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate } from "react-router-dom";
import { login } from "../../services/actions/login";

export const LoginPage = () => {
  const dispatch = useDispatch();

  const { isAuthenticated, loginRequestFailed } = useSelector(
    (state) => state.access
  );
  const [formValue, setFormValue] = React.useState({
    email: "",
    password: "",
  });

  function onFormChange(evt) {
    setFormValue({
      ...formValue,
      [evt.target.name]: evt.target.value,
    });
  }

  function onSubmit(evt) {
    evt.preventDefault();
    dispatch(login(formValue));
  }

  if (isAuthenticated) {
    return <Navigate to={Paths.HOME} replace />;
  }

  return (
    <div className={styles.container}>
      <h2 className={`text text_type_main-medium mb-6`}>Вход</h2>
      <form className={styles.form} onSubmit={onSubmit}>
        <div className="mb-6">
          <Input
            type={Inputs.Types.EMAIL}
            placeholder={Inputs.Placeholders.EMAIL}
            name={Inputs.Names.EMAIL}
            onChange={onFormChange}
            value={formValue.email}
            error={loginRequestFailed}
          />
        </div>
        <div className="mb-6">
          <PasswordInput
            value={formValue.password}
            name={Inputs.Names.PASSWORD}
            onChange={onFormChange}
          />
        </div>
        <Button type="primary" size="large" htmlType={"submit"}>
          Войти
        </Button>
      </form>

      <p className="text text_type_main-default text_color_inactive mt-20">
        Вы — новый пользователь?
        <Link to={Paths.REGISTER} className={styles.link}>
          {" "}
          Зарегистрироваться
        </Link>
      </p>

      <p className="text text_type_main-default text_color_inactive mt-4">
        Забыли пароль?
        <Link to={Paths.FORGOT_PASSWORD} className={styles.link}>
          {" "}
          Восстановить пароль
        </Link>
      </p>
    </div>
  );
};
