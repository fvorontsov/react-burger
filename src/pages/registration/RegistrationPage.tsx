import styles from "../login/login.module.css";
import {
  Button,
  Input,
  PasswordInput,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { Inputs, Paths } from "../../utils/constants";
import { Link, Navigate, useLocation } from "react-router-dom";
import React, { ChangeEvent, FC, FormEvent } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks/redux";
import { IUserWithPassword } from "../../types/user";
import { userRegister } from "../../store/actions/UserActions";

export const RegistrationPage: FC = () => {
  const dispatch = useAppDispatch();
  const isAuthenticated = useAppSelector((s) => s.userSliceReducer.user);

  const { state } = useLocation();

  const [user, setUser] = React.useState<IUserWithPassword>({
    name: "",
    email: "",
    password: "",
  });

  function onFormChange(event: ChangeEvent<HTMLInputElement>) {
    setUser({
      ...user,
      [event.target.name]: event.target.value,
    });
  }

  function onSubmit(event: FormEvent) {
    event.preventDefault();
    dispatch(userRegister(user));
  }

  if (isAuthenticated) {
    return <Navigate to={state?.from || Paths.HOME} />;
  }

  return (
    <div className={styles.container}>
      <h2 className={`text text_type_main-medium mb-6`}>Регистрация</h2>
      <form className={styles.form} onSubmit={onSubmit}>
        <div className="mb-6">
          <Input
            type={Inputs.Types.TEXT}
            placeholder={Inputs.Placeholders.NAME}
            name={Inputs.Names.NAME}
            onChange={onFormChange}
            value={user.name}
          />
        </div>
        <div className="mb-6">
          <Input
            type={Inputs.Types.EMAIL}
            placeholder={Inputs.Placeholders.EMAIL}
            name={Inputs.Names.EMAIL}
            onChange={onFormChange}
            value={user.email}
          />
        </div>
        <div className="mb-6">
          <PasswordInput
            value={user.password}
            name={Inputs.Names.PASSWORD}
            onChange={onFormChange}
          />
        </div>
        <Button type="primary" size="large" htmlType={"submit"}>
          Зарегистрироваться
        </Button>
      </form>

      <p className="text text_type_main-default text_color_inactive mt-20">
        Уже зарегистрированы?
        <Link to={Paths.LOGIN} className={styles.link}>
          {" "}
          Войти
        </Link>
      </p>
    </div>
  );
};
