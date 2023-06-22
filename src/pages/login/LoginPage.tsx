import styles from "./login.module.css";
import { Inputs, Paths } from "../../utils/constants";
import {
  Button,
  Input,
  PasswordInput,
} from "@ya.praktikum/react-developer-burger-ui-components";
import React, { ChangeEvent, FC, FormEvent } from "react";
import { Link, Navigate, useLocation } from "react-router-dom";
import { TLoginForm } from "../../types";
import { useAppDispatch, useAppSelector } from "../../store/hooks/redux";
import { userLogin } from "../../store/actions/UserActions";

export const LoginPage: FC = () => {
  const dispatch = useAppDispatch();
  const location = useLocation();

  const isAuthenticated = useAppSelector((s) => s.userSliceReducer.user);

  const [formValue, setFormValue] = React.useState<TLoginForm>({
    email: "",
    password: "",
  });

  function onFormChange(event: ChangeEvent<HTMLInputElement>) {
    setFormValue({
      ...formValue,
      [event.target.name]: event.target.value,
    });
  }

  function onSubmit(event: FormEvent) {
    event.preventDefault();
    dispatch(userLogin(formValue));
  }

  if (isAuthenticated) {
    return <Navigate to={location?.state?.from || Paths.HOME} replace />;
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
            // error={loginRequestFailed}
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
