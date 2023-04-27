export type TProfileEditorForm = {
  name: string;
  email: string;
  password: string;
};

export type TRegistrationForm = Pick<
  TProfileEditorForm,
  "name" | "email" | "password"
>;

export type TLoginForm = Pick<TProfileEditorForm, "email" | "password">;
export type TForgotPasswordForm = Pick<TProfileEditorForm, "email">;
export type TResetPasswordForm = Pick<TProfileEditorForm, "password"> & {
  token: string;
};
