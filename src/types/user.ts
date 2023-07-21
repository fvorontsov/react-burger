export type TUser = {
  name: string;
  email: string;
};

export type TUserWithPassword = TUser & {
  password: string;
};

export type TLoginData = {
  email: string;
  password: string;
};
