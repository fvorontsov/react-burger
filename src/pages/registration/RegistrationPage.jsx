import { useDispatch, useSelector } from "react-redux";
import styles from "../login/login.module.css";
import {
  Button,
  Input,
  PasswordInput,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { Inputs, Paths } from "../../utils/constants";
import { Link, Navigate, useLocation } from "react-router-dom";
import React from "react";
import { register } from "../../services/actions/register";

export const RegistrationPage = () => {
  const dispatch = useDispatch();

  const { isAuthenticated, registerRequestFailed } = useSelector(
    (state) => state.access
  );
  const { state } = useLocation();

  const [formValue, setFormValue] = React.useState({
    name: "",
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
