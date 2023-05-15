import {
  CLOSE_ORDER_DETAILS_MODAL,
  DESELECT_INGREDIENT,
  OPEN_ORDER_DETAILS_MODAL,
  SELECT_INGREDIENT,
} from "../constants";

export interface ISelectIngredientAction {
  readonly type: typeof SELECT_INGREDIENT;
}

export interface IDeSelectIngredientAction {
  readonly type: typeof DESELECT_INGREDIENT;
}

export interface IOpenIngredientDetailsModalAction {
  readonly type: typeof OPEN_ORDER_DETAILS_MODAL;
}

export interface ICloseIngredientDetailsModalAction {
  readonly type: typeof CLOSE_ORDER_DETAILS_MODAL;
}

export type TIngredientDetailsActions =
  | ISelectIngredientAction
  | IDeSelectIngredientAction
  | IOpenIngredientDetailsModalAction
  | ICloseIngredientDetailsModalAction;

export function selectIngredient(ingredient: any) {
  return {
    type: SELECT_INGREDIENT,
    selectedIngredient: ingredient,
  };
}
