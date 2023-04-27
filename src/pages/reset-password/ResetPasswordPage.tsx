import { useDispatch, useSelector } from "react-redux";
import React, { ChangeEvent, FC, FormEvent } from "react";
import styles from "../login/login.module.css";
import {
  Button,
  Input,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { Inputs, Paths } from "../../utils/constants";
import { Link, Navigate } from "react-router-dom";
import { resetPassword } from "../../services/actions/reset-password";
import { TResetPasswordForm } from "../../types";

export const ResetPasswordPage: FC = () => {
  const dispatch = useDispatch<any>();

  const { forgotPasswordRequestSucceed } = useSelector(
    (state: any) => state.access
  );

  const {
    isAuthenticated,
    resetPasswordRequestSucceed,
    resetPasswordRequestFailed,
  } = useSelector((state: any) => state.access);

  const [formValue, setFormValue] = React.useState<TResetPasswordForm>({
    password: "",
    token: "",
  });
  const [showPassword, setShowPassword] = React.useState(true);

  function onFormChange(event: ChangeEvent<HTMLInputElement>) {
    setFormValue({
      ...formValue,
      [event.target.name]: event.target.value,
    });
  }

  function onSubmit(event: FormEvent) {
    event.preventDefault();
    dispatch(resetPassword(formValue));
  }

  function onIconClick() {
    setShowPassword(!showPassword);
  }

  if (resetPasswordRequestSucceed || !forgotPasswordRequestSucceed) {
    return <Navigate to={Paths.LOGIN} />;
  } else if (isAuthenticated) {
    return <Navigate to={Paths.HOME} />;
  }

  return (
    <div className={styles.container}>
      <h2 className={`text text_type_main-medium mb-6`}>
        Восстановление пароля
      </h2>
      <form className={styles.form} onSubmit={onSubmit}>
        <div className="mb-6">
          <Input
            type={showPassword ? Inputs.Types.PASSWORD : Inputs.Types.TEXT}
            value={formValue.password}
            placeholder={Inputs.Placeholders.NEW_PASS}
            icon={showPassword ? "ShowIcon" : "HideIcon"}
            name={Inputs.Names.PASSWORD}
            onChange={onFormChange}
            onIconClick={onIconClick}
            error={resetPasswordRequestFailed}
          />
        </div>
        <div className="mb-6">
          <Input
            type={Inputs.Types.TEXT}
            placeholder={Inputs.Placeholders.CODE}
            name={Inputs.Names.CODE}
            onChange={onFormChange}
            value={formValue.token}
            error={resetPasswordRequestFailed}
          />
        </div>

        <Button type="primary" size="large" htmlType={"submit"}>
          Сохранить
        </Button>
      </form>

      <p className="text text_type_main-default text_color_inactive mt-20">
        Вспомнили пароль?
        <Link to={Paths.LOGIN} className={styles.link}>
          Войти
        </Link>
      </p>
    </div>
  );
};