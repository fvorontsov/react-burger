import { fetchIngredients } from "../../utils/api";
import {
  CLEAR_QUANTITY,
  DECREASE_INGREDIENT_QUANTITY,
  FETCH_INGREDIENTS_REQUEST_FAILED,
  FETCH_INGREDIENTS_REQUEST_STARTED,
  FETCH_INGREDIENTS_REQUEST_SUCCEED,
  INCREASE_INGREDIENT_QUANTITY,
  SELECT_BUNS,
} from "../constants";
import { AppDispatch, AppThunk } from "../types";

export interface IFetchIngredientsRequestStartedAction {
  readonly type: typeof FETCH_INGREDIENTS_REQUEST_STARTED;
}

export interface IFetchIngredientsRequestSucceedAction {
  readonly type: typeof FETCH_INGREDIENTS_REQUEST_SUCCEED;
}

export interface IFetchIngredientsRequestFailedAction {
  readonly type: typeof FETCH_INGREDIENTS_REQUEST_FAILED;
}

export interface ISelectBunsAction {
  readonly type: typeof SELECT_BUNS;
}

export interface IIncreaseIngredientQuantityAction {
  readonly type: typeof INCREASE_INGREDIENT_QUANTITY;
}

export interface IDecreaseIngredientQuantityAction {
  readonly type: typeof DECREASE_INGREDIENT_QUANTITY;
}

export interface IClearQuantityAction {
  readonly type: typeof CLEAR_QUANTITY;
}

export type TBurgerIngredientsActions =
  | IFetchIngredientsRequestStartedAction
  | IFetchIngredientsRequestSucceedAction
  | IFetchIngredientsRequestFailedAction
  | ISelectBunsAction
  | IIncreaseIngredientQuantityAction
  | IDecreaseIngredientQuantityAction
  | IClearQuantityAction;

export const getIngredients: AppThunk = () => (dispatch: AppDispatch) => {
  dispatch({
    type: FETCH_INGREDIENTS_REQUEST_STARTED,
  });
  fetchIngredients()
    .then((res) => {
      dispatch({
        type: FETCH_INGREDIENTS_REQUEST_SUCCEED,
        ingredients: res.data.map((ingredient: any) => ({
          ...ingredient,
          quantity: 0,
        })),
      });
    })
    .catch(() => {
      dispatch({
        type: FETCH_INGREDIENTS_REQUEST_FAILED,
      });
    });
};
