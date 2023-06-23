import React, {
  ChangeEvent,
  FC,
  FormEvent,
  SyntheticEvent,
  useMemo,
} from "react";
import {
  Button,
  Input,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./profile-editor.module.css";
import { Inputs } from "../../../utils/constants";
import { useAppDispatch, useAppSelector } from "../../../store/hooks/redux";
import { TProfileEditorForm } from "../../../types";
import { setUser } from "../../../store/actions/UserActions";
import { updateUserProfile } from "../../../utils/api";
import { logErrorDescription } from "../../../utils/utils";

export const ProfileEditor: FC = () => {
  const dispatch = useAppDispatch();

  const user = useAppSelector((s) => s.userSliceReducer.user);

  if (!user) {
    throw new Error("Invalid user state");
  }

  const { name, email } = user;
  const password = "";

  const [focus, setFocus] = React.useState({
    name: false,
    email: false,
    password: false,
  });

  const [formValue, setFormValue] = React.useState<TProfileEditorForm>({
    name: name,
    email: email,
    password: password,
  });

  const isChanged = useMemo(() => {
    return (
      name !== formValue.name ||
      email !== formValue.email ||
      password !== formValue.password
    );
  }, [formValue, name, email, password]);

  function onFormChange(event: ChangeEvent<HTMLInputElement>) {
    setFormValue({
      ...formValue,
      [event.target.name]: event.target.value,
    });
  }

  function onSubmit(event: FormEvent) {
    event.preventDefault();
    updateUserProfile(formValue)
      .then((updatedProfile) => {
        dispatch(setUser(updatedProfile));
      })
      .catch((error) => logErrorDescription(error));
  }

  function onCancel(event: SyntheticEvent) {
    event.preventDefault();
    setFormValue({
      name,
      email,
      password,
    });
  }

  function onFocus(event: React.FocusEvent<HTMLInputElement>) {
    setFocus({
      ...focus,
      [event.target.name]: true,
    });
  }

  function onBlur(event: React.FocusEvent<HTMLInputElement>) {
    setFocus({
      ...focus,
      [event.target.name]: false,
    });
  }

  return (
    <form onSubmit={onSubmit}>
      <div className="mb-6">
        <Input
          type={Inputs.Types.TEXT}
          placeholder={Inputs.Placeholders.NAME}
          name={Inputs.Names.NAME}
          onChange={onFormChange}
          value={formValue.name}
          onFocus={onFocus}
          onBlur={onBlur}
          icon={focus.name ? "CloseIcon" : "EditIcon"}
        />
      </div>
      <div className="mb-6">
        <Input
          type={Inputs.Types.EMAIL}
          placeholder={Inputs.Placeholders.EMAIL}
          name={Inputs.Names.EMAIL}
          onChange={onFormChange}
          value={formValue.email}
          onFocus={onFocus}
          onBlur={onBlur}
          icon={focus.email ? "CloseIcon" : "EditIcon"}
        />
      </div>
      <div className="mb-6">
        <Input
          type={Inputs.Types.PASSWORD}
          value={formValue.password}
          placeholder={Inputs.Placeholders.NEW_PASS}
          icon={focus.password ? "CloseIcon" : "EditIcon"}
          name={Inputs.Names.PASSWORD}
          onFocus={onFocus}
          onBlur={onBlur}
          onChange={onFormChange}
        />
      </div>
      {isChanged && (
        <div className={styles.buttons}>
          <Button
            type="secondary"
            size="large"
            onClick={onCancel}
            htmlType={"reset"}
          >
            Отмена
          </Button>
          <Button type="primary" size="large" htmlType={"submit"}>
            Сохранить
          </Button>
        </div>
      )}
    </form>
  );
};
