import React, { useMemo } from "react";
import {
  Button,
  Input,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./profile-editor.module.css";
import { useDispatch, useSelector } from "react-redux";
import { editProfile } from "../../../services/actions/profile";
import { Inputs } from "../../../utils/constants";

export const ProfileEditor = () => {
  const dispatch = useDispatch();

  const { name, email, password } = useSelector((state) => state.access.user);

  const [formValue, setFormValue] = React.useState({
    name: name,
    email: email,
    password: password,
  });

  const [focus, setFocus] = React.useState({
    name: false,
    email: false,
    password: false,
  });

  const isChanged = useMemo(() => {
    return (
      name !== formValue.name ||
      email !== formValue.email ||
      password !== formValue.password
    );
  }, [formValue, name, email, password]);

  function onFormChange(evt) {
    setFormValue({
      ...formValue,
      [evt.target.name]: evt.target.value,
    });
  }

  function onSubmit(evt) {
    evt.preventDefault();
    dispatch(editProfile(formValue));
  }

  function onCancel(evt) {
    evt.preventDefault();
    setFormValue({
      name,
      email,
      password,
    });
  }

  function onFocus(evt) {
    setFocus({
      ...focus,
      [evt.target.name]: true,
    });
  }

  function onBlur(evt) {
    setFocus({
      ...focus,
      [evt.target.name]: false,
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
          <Button type="secondary" size="large" onClick={onCancel} htmlType={"reset"}>
            Отмена
          </Button>
          <Button type="primary" size="large" htmlType={"button"}>
            Сохранить
          </Button>
        </div>
      )}
    </form>
  );
};
