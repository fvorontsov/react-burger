import { useDispatch, useSelector } from "react-redux";
import styles from "../login/login.module.css";
import {
  Button,
  Input,
  PasswordInput,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { Inputs, Paths } from "../../utils/constants";
import { Link, Navigate, useLocation } from "react-router-dom";
import React, { ChangeEvent, FC, FormEvent } from "react";
import { register } from "../../services/actions/register";
import { TRegistrationForm } from "../../types";

export const RegistrationPage: FC = () => {
  const dispatch = useDispatch<any>();

  const { isAuthenticated, registerRequestFailed } = useSelector(
    (state: any) => state.access
  );
  const { state } = useLocation();

  const [formValue, setFormValue] = React.useState<TRegistrationForm>({
    name: "",
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
    dispatch(register(formValue));
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
            value={formValue.name}
          />
        </div>
        <div className="mb-6">
          <Input
            type={Inputs.Types.EMAIL}
            placeholder={Inputs.Placeholders.EMAIL}
            name={Inputs.Names.EMAIL}
            onChange={onFormChange}
            value={formValue.email}
            error={registerRequestFailed}
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
