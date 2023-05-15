import { TInput, TString } from "../types";

export const IngredientType: TString = {
  BUN: "bun",
  SAUCE: "sauce",
  MAIN: "main",
};

export const BunType: TString = {
  TOP: "top",
  BOTTOM: "bottom",
};

export const ItemTypes: TString = {
  INGREDIENT_CARD: "INGREDIENT_CARD",
  CONSTRUCTOR_CARD: "CONSTRUCTOR_CARD",
};

export const Inputs: TInput = {
  Types: {
    EMAIL: "email",
    TEXT: "text",
    PASSWORD: "password",
  },
  Names: {
    EMAIL: "email",
    NAME: "name",
    PASSWORD: "password",
    CODE: "token",
  },
  Placeholders: {
    EMAIL: "E-mail",
    PASSWORD: "Пароль",
    NAME: "Имя",
    RESTORE: "Укажите e-mail",
    NEW_PASS: "Введите новый пароль",
    CODE: "Введите код из письма",
  },
};

export const TokenIdentifiers: TString = {
  REFRESH: "refreshToken",
  ACCESS: "accessToken",
};

export const Errors: TString = {
  JWT_EXPIRED: "jwt expired",
};

export const Paths: TString = {
  REGISTER: "/register",
  LOGIN: "/login",
  HOME: "/",
  PROFILE: "/profile",
  PROFILE_ORDERS: "/profile/orders",
  FORGOT_PASSWORD: "/forgot-password",
  RESET_PASSWORD: "/reset-password",
  ORDERS: "/orders",
  INGREDIENT: "/ingredients/:id",
  INGREDIENTS: "/ingredients",
  FEED: "/feed",
  ORDER: "/feed/:id"
};

export const ORDER_TEST = {
  "success": true,
  "orders": [
    {
      "_id": "624ab12b1a3b2c001bcf5350",
      "ingredients": [
        "60d3b41abdacab0026a733c6",
        "60d3b41abdacab0026a733c9"
      ],
      "status": "done",
      "name": "Краторный бессмертный бургер",
      "createdAt": "2022-04-04T08:49:47.153Z",
      "updatedAt": "2022-04-04T08:49:47.307Z",
      "number": 12902
    },
    {
      "_id": "624ab11c1a3b2c001bcf534d",
      "ingredients": [
        "60d3b41abdacab0026a733c6",
        "60d3b41abdacab0026a733c9"
      ],
      "status": "done",
      "name": "Краторный бессмертный бургер",
      "createdAt": "2022-04-04T08:49:32.722Z",
      "updatedAt": "2022-04-04T08:49:32.904Z",
      "number": 12901
    },
    {
      "_id": "624ab1131a3b2c001bcf534a",
      "ingredients": [
        "60d3b41abdacab0026a733c6",
        "60d3b41abdacab0026a733c9"
      ],
      "status": "done",
      "name": "Краторный бессмертный бургер",
      "createdAt": "2022-04-04T08:49:23.695Z",
      "updatedAt": "2022-04-04T08:49:23.905Z",
      "number": 12900
    },
    {
      "_id": "624ab0fe1a3b2c001bcf5347",
      "ingredients": [
        "60d3b41abdacab0026a733c6",
        "60d3b41abdacab0026a733c9"
      ],
      "status": "done",
      "name": "Краторный бессмертный бургер",
      "createdAt": "2022-04-04T08:49:02.030Z",
      "updatedAt": "2022-04-04T08:49:02.256Z",
      "number": 12899
    },
    {
      "_id": "624ab0f01a3b2c001bcf5344",
      "ingredients": [
        "60d3b41abdacab0026a733c6",
        "60d3b41abdacab0026a733c9"
      ],
      "status": "done",
      "name": "Краторный бессмертный бургер",
      "createdAt": "2022-04-04T08:48:48.993Z",
      "updatedAt": "2022-04-04T08:48:49.193Z",
      "number": 12898
    },
    {
      "_id": "624ab0921a3b2c001bcf533f",
      "ingredients": [
        "60d3b41abdacab0026a733c6",
        "60d3b41abdacab0026a733c9"
      ],
      "status": "done",
      "name": "Краторный бессмертный бургер",
      "createdAt": "2022-04-04T08:47:14.886Z",
      "updatedAt": "2022-04-04T08:47:15.040Z",
      "number": 12897
    },
    {
      "_id": "624ab0691a3b2c001bcf533c",
      "ingredients": [
        "60d3b41abdacab0026a733c6",
        "60d3b41abdacab0026a733c9"
      ],
      "status": "done",
      "name": "Краторный бессмертный бургер",
      "createdAt": "2022-04-04T08:46:33.737Z",
      "updatedAt": "2022-04-04T08:46:33.895Z",
      "number": 12896
    },
    {
      "_id": "624aafd71a3b2c001bcf5335",
      "ingredients": [
        "60d3b41abdacab0026a733cd",
        "60d3b41abdacab0026a733cd",
        "60d3b41abdacab0026a733cd",
        "60d3b41abdacab0026a733c7",
        "60d3b41abdacab0026a733c7"
      ],
      "status": "done",
      "name": "Space флюоресцентный бургер",
      "createdAt": "2022-04-04T08:44:07.064Z",
      "updatedAt": "2022-04-04T08:44:07.208Z",
      "number": 12895
    },
    {
      "_id": "624aaf3a1a3b2c001bcf532d",
      "ingredients": [
        "60d3b41abdacab0026a733c6",
        "60d3b41abdacab0026a733c9"
      ],
      "status": "done",
      "name": "Краторный бессмертный бургер",
      "createdAt": "2022-04-04T08:41:30.208Z",
      "updatedAt": "2022-04-04T08:41:30.383Z",
      "number": 12894
    },
    {
      "_id": "624aaf281a3b2c001bcf532a",
      "ingredients": [
        "60d3b41abdacab0026a733c6",
        "60d3b41abdacab0026a733c9"
      ],
      "status": "done",
      "name": "Краторный бессмертный бургер",
      "createdAt": "2022-04-04T08:41:12.487Z",
      "updatedAt": "2022-04-04T08:41:12.706Z",
      "number": 12893
    },
    {
      "_id": "624aaeab1a3b2c001bcf5326",
      "ingredients": [
        "60d3b41abdacab0026a733c6",
        "60d3b41abdacab0026a733c9"
      ],
      "status": "done",
      "name": "Краторный бессмертный бургер",
      "createdAt": "2022-04-04T08:39:07.083Z",
      "updatedAt": "2022-04-04T08:39:07.208Z",
      "number": 12892
    },
    {
      "_id": "624aae801a3b2c001bcf5322",
      "ingredients": [
        "60d3b41abdacab0026a733c6"
      ],
      "status": "done",
      "name": "Краторный бургер",
      "createdAt": "2022-04-04T08:38:24.939Z",
      "updatedAt": "2022-04-04T08:38:25.097Z",
      "number": 12891
    },
    {
      "_id": "624aae641a3b2c001bcf5320",
      "ingredients": [
        "60d3b41abdacab0026a733c6",
        "60d3b41abdacab0026a733c9"
      ],
      "status": "done",
      "name": "Краторный бессмертный бургер",
      "createdAt": "2022-04-04T08:37:56.201Z",
      "updatedAt": "2022-04-04T08:37:56.407Z",
      "number": 12890
    },
    {
      "_id": "624aae541a3b2c001bcf531d",
      "ingredients": [
        "60d3b41abdacab0026a733cd",
        "60d3b41abdacab0026a733cd",
        "60d3b41abdacab0026a733cd",
        "60d3b41abdacab0026a733c7",
        "60d3b41abdacab0026a733c7"
      ],
      "status": "done",
      "name": "Space флюоресцентный бургер",
      "createdAt": "2022-04-04T08:37:40.487Z",
      "updatedAt": "2022-04-04T08:37:40.706Z",
      "number": 12889
    },
    {
      "_id": "624aae2d1a3b2c001bcf531a",
      "ingredients": [
        "60d3b41abdacab0026a733c6",
        "60d3b41abdacab0026a733c9"
      ],
      "status": "done",
      "name": "Краторный бессмертный бургер",
      "createdAt": "2022-04-04T08:37:01.887Z",
      "updatedAt": "2022-04-04T08:37:02.100Z",
      "number": 12888
    },
    {
      "_id": "624aadfc1a3b2c001bcf5317",
      "ingredients": [
        "60d3b41abdacab0026a733cd",
        "60d3b41abdacab0026a733cd",
        "60d3b41abdacab0026a733cd",
        "60d3b41abdacab0026a733c7",
        "60d3b41abdacab0026a733c7"
      ],
      "status": "done",
      "name": "Space флюоресцентный бургер",
      "createdAt": "2022-04-04T08:36:12.038Z",
      "updatedAt": "2022-04-04T08:36:12.184Z",
      "number": 12887
    },
    {
      "_id": "624aad151a3b2c001bcf530e",
      "ingredients": [
        "60d3b41abdacab0026a733c6",
        "60d3b41abdacab0026a733c9"
      ],
      "status": "done",
      "name": "Краторный бессмертный бургер",
      "createdAt": "2022-04-04T08:32:21.684Z",
      "updatedAt": "2022-04-04T08:32:21.840Z",
      "number": 12886
    },
    {
      "_id": "624aacb81a3b2c001bcf5309",
      "ingredients": [
        "60d3b41abdacab0026a733c6",
        "60d3b41abdacab0026a733c9"
      ],
      "status": "done",
      "name": "Краторный бессмертный бургер",
      "createdAt": "2022-04-04T08:30:48.346Z",
      "updatedAt": "2022-04-04T08:30:48.518Z",
      "number": 12885
    },
    {
      "_id": "624aac601a3b2c001bcf5304",
      "ingredients": [
        "60d3b41abdacab0026a733c6",
        "60d3b41abdacab0026a733c9"
      ],
      "status": "done",
      "name": "Краторный бессмертный бургер",
      "createdAt": "2022-04-04T08:29:20.249Z",
      "updatedAt": "2022-04-04T08:29:20.417Z",
      "number": 12884
    },
    {
      "_id": "624aab9c1a3b2c001bcf52fc",
      "ingredients": [
        "60d3b41abdacab0026a733cd",
        "60d3b41abdacab0026a733cd",
        "60d3b41abdacab0026a733cd",
        "60d3b41abdacab0026a733cd",
        "60d3b41abdacab0026a733c7",
        "60d3b41abdacab0026a733c7"
      ],
      "status": "done",
      "name": "Space флюоресцентный бургер",
      "createdAt": "2022-04-04T08:26:04.749Z",
      "updatedAt": "2022-04-04T08:26:04.903Z",
      "number": 12883
    },
    {
      "_id": "624aab831a3b2c001bcf52fb",
      "ingredients": [
        "60d3b41abdacab0026a733cd",
        "60d3b41abdacab0026a733cd",
        "60d3b41abdacab0026a733cd",
        "60d3b41abdacab0026a733cd",
        "60d3b41abdacab0026a733c7",
        "60d3b41abdacab0026a733c7"
      ],
      "status": "done",
      "name": "Space флюоресцентный бургер",
      "createdAt": "2022-04-04T08:25:39.938Z",
      "updatedAt": "2022-04-04T08:25:40.103Z",
      "number": 12882
    },
    {
      "_id": "624aab601a3b2c001bcf52fa",
      "ingredients": [
        "60d3b41abdacab0026a733cd",
        "60d3b41abdacab0026a733cd",
        "60d3b41abdacab0026a733c7",
        "60d3b41abdacab0026a733c7"
      ],
      "status": "done",
      "name": "Space флюоресцентный бургер",
      "createdAt": "2022-04-04T08:25:04.297Z",
      "updatedAt": "2022-04-04T08:25:04.500Z",
      "number": 12881
    },
    {
      "_id": "624a90751a3b2c001bcf526e",
      "ingredients": [
        "60d3b41abdacab0026a733c6"
      ],
      "status": "done",
      "name": "Краторный бургер",
      "createdAt": "2022-04-04T06:30:13.315Z",
      "updatedAt": "2022-04-04T06:30:13.611Z",
      "number": 12880
    },
    {
      "_id": "624a7c101a3b2c001bcf5246",
      "ingredients": [
        "60d3b41abdacab0026a733c7",
        "60d3b41abdacab0026a733c9",
        "60d3b41abdacab0026a733c8"
      ],
      "status": "done",
      "name": "Флюоресцентный люминесцентный бессмертный бургер",
      "createdAt": "2022-04-04T05:03:12.965Z",
      "updatedAt": "2022-04-04T05:03:13.141Z",
      "number": 12879
    },
    {
      "_id": "624a7b861a3b2c001bcf5242",
      "ingredients": [
        "60d3b41abdacab0026a733c6",
        "60d3b41abdacab0026a733c9"
      ],
      "status": "done",
      "name": "Краторный бессмертный бургер",
      "createdAt": "2022-04-04T05:00:54.049Z",
      "updatedAt": "2022-04-04T05:00:54.194Z",
      "number": 12878
    },
    {
      "_id": "624a75121a3b2c001bcf51ea",
      "ingredients": [
        "60d3b41abdacab0026a733c7"
      ],
      "status": "done",
      "name": "Флюоресцентный бургер",
      "createdAt": "2022-04-04T04:33:22.568Z",
      "updatedAt": "2022-04-04T04:33:22.733Z",
      "number": 12877
    },
    {
      "_id": "624a2c641a3b2c001bcf51cf",
      "ingredients": [
        "60d3b41abdacab0026a733c7",
        "60d3b41abdacab0026a733cc"
      ],
      "status": "done",
      "name": "Флюоресцентный spicy бургер",
      "createdAt": "2022-04-03T23:23:16.655Z",
      "updatedAt": "2022-04-03T23:23:16.794Z",
      "number": 12876
    },
    {
      "_id": "624a2c161a3b2c001bcf51ce",
      "ingredients": [
        "60d3b41abdacab0026a733c7",
        "60d3b41abdacab0026a733cc"
      ],
      "status": "done",
      "name": "Флюоресцентный spicy бургер",
      "createdAt": "2022-04-03T23:21:58.914Z",
      "updatedAt": "2022-04-03T23:21:59.110Z",
      "number": 12875
    },
    {
      "_id": "624a2c141a3b2c001bcf51cd",
      "ingredients": [
        "60d3b41abdacab0026a733c7",
        "60d3b41abdacab0026a733cc"
      ],
      "status": "done",
      "name": "Флюоресцентный spicy бургер",
      "createdAt": "2022-04-03T23:21:56.558Z",
      "updatedAt": "2022-04-03T23:21:56.728Z",
      "number": 12874
    },
    {
      "_id": "624a2c101a3b2c001bcf51cc",
      "ingredients": [
        "60d3b41abdacab0026a733c7",
        "60d3b41abdacab0026a733cc"
      ],
      "status": "done",
      "name": "Флюоресцентный spicy бургер",
      "createdAt": "2022-04-03T23:21:52.773Z",
      "updatedAt": "2022-04-03T23:21:52.952Z",
      "number": 12873
    },
    {
      "_id": "624a2be31a3b2c001bcf51cb",
      "ingredients": [
        "60d3b41abdacab0026a733c7",
        "60d3b41abdacab0026a733cc"
      ],
      "status": "done",
      "name": "Флюоресцентный spicy бургер",
      "createdAt": "2022-04-03T23:21:07.466Z",
      "updatedAt": "2022-04-03T23:21:07.614Z",
      "number": 12872
    },
    {
      "_id": "624a2bd81a3b2c001bcf51ca",
      "ingredients": [
        "60d3b41abdacab0026a733c6",
        "60d3b41abdacab0026a733cd",
        "60d3b41abdacab0026a733cc"
      ],
      "status": "done",
      "name": "Краторный space spicy бургер",
      "createdAt": "2022-04-03T23:20:56.744Z",
      "updatedAt": "2022-04-03T23:20:56.902Z",
      "number": 12871
    },
    {
      "_id": "624a2ac41a3b2c001bcf51c7",
      "ingredients": [
        "60d3b41abdacab0026a733c6",
        "60d3b41abdacab0026a733c9"
      ],
      "status": "done",
      "name": "Краторный бессмертный бургер",
      "createdAt": "2022-04-03T23:16:20.117Z",
      "updatedAt": "2022-04-03T23:16:20.259Z",
      "number": 12870
    },
    {
      "_id": "624a29a31a3b2c001bcf51c3",
      "ingredients": [
        "60d3b41abdacab0026a733c6",
        "60d3b41abdacab0026a733cd",
        "60d3b41abdacab0026a733cc"
      ],
      "status": "done",
      "name": "Краторный space spicy бургер",
      "createdAt": "2022-04-03T23:11:31.090Z",
      "updatedAt": "2022-04-03T23:11:31.262Z",
      "number": 12869
    },
    {
      "_id": "624a29971a3b2c001bcf51c2",
      "ingredients": [
        "60d3b41abdacab0026a733c6",
        "60d3b41abdacab0026a733cd",
        "60d3b41abdacab0026a733cc"
      ],
      "status": "done",
      "name": "Краторный space spicy бургер",
      "createdAt": "2022-04-03T23:11:19.644Z",
      "updatedAt": "2022-04-03T23:11:19.815Z",
      "number": 12868
    },
    {
      "_id": "624a23931a3b2c001bcf51bc",
      "ingredients": [
        "60d3b41abdacab0026a733c7",
        "60d3b41abdacab0026a733cd",
        "60d3b41abdacab0026a733cf",
        "60d3b41abdacab0026a733cd"
      ],
      "status": "done",
      "name": "Space антарианский флюоресцентный бургер",
      "createdAt": "2022-04-03T22:45:39.131Z",
      "updatedAt": "2022-04-03T22:45:39.304Z",
      "number": 12867
    },
    {
      "_id": "624a0e471a3b2c001bcf50b4",
      "ingredients": [
        "60d3b41abdacab0026a733c7",
        "60d3b41abdacab0026a733cd",
        "60d3b41abdacab0026a733cf"
      ],
      "status": "done",
      "name": "Space антарианский флюоресцентный бургер",
      "createdAt": "2022-04-03T21:14:47.306Z",
      "updatedAt": "2022-04-03T21:14:47.520Z",
      "number": 12866
    },
    {
      "_id": "6249ff251a3b2c001bcf5065",
      "ingredients": [
        "60d3b41abdacab0026a733c7",
        "60d3b41abdacab0026a733cd"
      ],
      "status": "done",
      "name": "Space флюоресцентный бургер",
      "createdAt": "2022-04-03T20:10:13.099Z",
      "updatedAt": "2022-04-03T20:10:13.277Z",
      "number": 12865
    },
    {
      "_id": "6249fefe1a3b2c001bcf5062",
      "ingredients": [
        "60d3b41abdacab0026a733cc",
        "60d3b41abdacab0026a733cd"
      ],
      "status": "done",
      "name": "Space spicy бургер",
      "createdAt": "2022-04-03T20:09:34.944Z",
      "updatedAt": "2022-04-03T20:09:35.100Z",
      "number": 12864
    },
    {
      "_id": "6249fe171a3b2c001bcf5059",
      "ingredients": [
        "60d3b41abdacab0026a733c6",
        "60d3b41abdacab0026a733cd"
      ],
      "status": "done",
      "name": "Краторный space бургер",
      "createdAt": "2022-04-03T20:05:43.275Z",
      "updatedAt": "2022-04-03T20:05:43.404Z",
      "number": 12863
    },
    {
      "_id": "6249fc511a3b2c001bcf5048",
      "ingredients": [
        "60d3b41abdacab0026a733cd",
        "60d3b41abdacab0026a733cc"
      ],
      "status": "done",
      "name": "Space spicy бургер",
      "createdAt": "2022-04-03T19:58:09.480Z",
      "updatedAt": "2022-04-03T19:58:09.625Z",
      "number": 12862
    },
    {
      "_id": "6249fb241a3b2c001bcf5032",
      "ingredients": [
        "60d3b41abdacab0026a733c7",
        "60d3b41abdacab0026a733ce",
        "60d3b41abdacab0026a733c9",
        "60d3b41abdacab0026a733ca",
        "60d3b41abdacab0026a733d2"
      ],
      "status": "done",
      "name": "Традиционный-галактический бессмертный метеоритный флюоресцентный альфа-сахаридный бургер",
      "createdAt": "2022-04-03T19:53:08.356Z",
      "updatedAt": "2022-04-03T19:53:08.538Z",
      "number": 12861
    },
    {
      "_id": "6249fb001a3b2c001bcf5031",
      "ingredients": [
        "60d3b41abdacab0026a733cd",
        "60d3b41abdacab0026a733c9",
        "60d3b41abdacab0026a733d4",
        "60d3b41abdacab0026a733d3",
        "60d3b41abdacab0026a733c7"
      ],
      "status": "done",
      "name": "Space бессмертный астероидный экзо-плантаго флюоресцентный бургер",
      "createdAt": "2022-04-03T19:52:32.853Z",
      "updatedAt": "2022-04-03T19:52:33.017Z",
      "number": 12860
    },
    {
      "_id": "6249fa641a3b2c001bcf502c",
      "ingredients": [
        "60d3b41abdacab0026a733c7",
        "60d3b41abdacab0026a733cd",
        "60d3b41abdacab0026a733cd",
        "60d3b41abdacab0026a733cd",
        "60d3b41abdacab0026a733cd",
        "60d3b41abdacab0026a733cd",
        "60d3b41abdacab0026a733cd",
        "60d3b41abdacab0026a733cc"
      ],
      "status": "done",
      "name": "Space флюоресцентный spicy бургер",
      "createdAt": "2022-04-03T19:49:56.792Z",
      "updatedAt": "2022-04-03T19:49:56.968Z",
      "number": 12859
    },
    {
      "_id": "6249fa571a3b2c001bcf502b",
      "ingredients": [
        "60d3b41abdacab0026a733c7",
        "60d3b41abdacab0026a733cd",
        "60d3b41abdacab0026a733cd",
        "60d3b41abdacab0026a733cd",
        "60d3b41abdacab0026a733cd",
        "60d3b41abdacab0026a733cd",
        "60d3b41abdacab0026a733cc"
      ],
      "status": "done",
      "name": "Space флюоресцентный spicy бургер",
      "createdAt": "2022-04-03T19:49:43.357Z",
      "updatedAt": "2022-04-03T19:49:43.538Z",
      "number": 12858
    },
    {
      "_id": "6249fa391a3b2c001bcf502a",
      "ingredients": [
        "60d3b41abdacab0026a733c7",
        "60d3b41abdacab0026a733cd",
        "60d3b41abdacab0026a733cc",
        "60d3b41abdacab0026a733cd",
        "60d3b41abdacab0026a733cd",
        "60d3b41abdacab0026a733cd",
        "60d3b41abdacab0026a733cd"
      ],
      "status": "done",
      "name": "Space флюоресцентный spicy бургер",
      "createdAt": "2022-04-03T19:49:13.228Z",
      "updatedAt": "2022-04-03T19:49:13.433Z",
      "number": 12857
    },
    {
      "_id": "6249fa0e1a3b2c001bcf5028",
      "ingredients": [
        "60d3b41abdacab0026a733c6",
        "60d3b41abdacab0026a733cd"
      ],
      "status": "done",
      "name": "Краторный space бургер",
      "createdAt": "2022-04-03T19:48:30.659Z",
      "updatedAt": "2022-04-03T19:48:30.814Z",
      "number": 12856
    },
    {
      "_id": "6249f9b61a3b2c001bcf5024",
      "ingredients": [
        "60d3b41abdacab0026a733cf",
        "60d3b41abdacab0026a733c9",
        "60d3b41abdacab0026a733d2",
        "60d3b41abdacab0026a733cb",
        "60d3b41abdacab0026a733d4",
        "60d3b41abdacab0026a733c7"
      ],
      "status": "done",
      "name": "Антарианский бессмертный астероидный био-марсианский флюоресцентный альфа-сахаридный бургер",
      "createdAt": "2022-04-03T19:47:02.203Z",
      "updatedAt": "2022-04-03T19:47:02.402Z",
      "number": 12855
    },
    {
      "_id": "6249f76c1a3b2c001bcf4ff8",
      "ingredients": [
        "60d3b41abdacab0026a733c7",
        "60d3b41abdacab0026a733c9",
        "60d3b41abdacab0026a733c7"
      ],
      "status": "done",
      "name": "Флюоресцентный бессмертный бургер",
      "createdAt": "2022-04-03T19:37:16.829Z",
      "updatedAt": "2022-04-03T19:37:17.013Z",
      "number": 12854
    },
    {
      "_id": "6249ef471a3b2c001bcf4fa2",
      "ingredients": [
        "60d3b41abdacab0026a733c7",
        "60d3b41abdacab0026a733cd",
        "60d3b41abdacab0026a733cd",
        "60d3b41abdacab0026a733cd",
        "60d3b41abdacab0026a733cd",
        "60d3b41abdacab0026a733cd"
      ],
      "status": "done",
      "name": "Space флюоресцентный бургер",
      "createdAt": "2022-04-03T19:02:31.071Z",
      "updatedAt": "2022-04-03T19:02:31.230Z",
      "number": 12853
    }
  ],
  "total": 12815,
  "totalToday": 171
};
