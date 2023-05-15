import {
  ADD_INGREDIENT,
  CLEAR_INGREDIENTS,
  MOVE_INGREDIENT,
  REMOVE_INGREDIENT,
  SELECT_BUN,
} from "../constants";

export interface ISelectBunAction {
  readonly type: typeof SELECT_BUN;
}

export interface IAddIngredientAction {
  readonly type: typeof ADD_INGREDIENT;
}

export interface IRemoveIngredientAction {
  readonly type: typeof REMOVE_INGREDIENT;
}

export interface IMoveIngredientAction {
  readonly type: typeof MOVE_INGREDIENT;
}

export interface IClearIngredientsAction {
  readonly type: typeof CLEAR_INGREDIENTS;
}

export type TBurgerConstructorActions =
  | ISelectBunAction
  | IAddIngredientAction
  | IRemoveIngredientAction
  | IMoveIngredientAction
  | IClearIngredientsAction;
