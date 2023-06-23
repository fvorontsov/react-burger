import React, { ChangeEvent, FC, FormEvent } from "react";
import styles from "../login/login.module.css";
import {
  Button,
  Input,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { Inputs, Paths } from "../../utils/constants";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { TForgotPasswordForm } from "../../types";
import { useAppDispatch, useAppSelector } from "../../store/hooks/redux";
import { resetPassword } from "../../utils/api";
import { setIsWaitingReset } from "../../store/actions/UserActions";
import { logErrorDescription } from "../../utils/utils";

export const ForgotPasswordPage: FC = () => {
  const dispatch = useAppDispatch();

  const isAuthenticated = useAppSelector((s) => s.userSliceReducer.user);

  const [formValue, setFormValue] = React.useState<TForgotPasswordForm>({
    email: "",
  });

  const navigate = useNavigate();

  function onFormChange(event: ChangeEvent<HTMLInputElement>) {
    setFormValue({
      ...formValue,
      [event.target.name]: event.target.value,
    });
  }

  function onSubmit(event: FormEvent) {
    event.preventDefault();
    resetPassword(formValue.email)
      .then(() => {
        dispatch(setIsWaitingReset(true));
        navigate("/reset-password");
      })
      .catch((error) => logErrorDescription(error));
  }

  if (isAuthenticated) {
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
        <Button
          type="primary"
          size="large"
          onClick={onSubmit}
          htmlType={"submit"}
        >
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
