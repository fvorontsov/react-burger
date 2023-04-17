import { fetchIngredients } from "../../utils/api";

export const FETCH_INGREDIENTS_REQUEST_STARTED =
  "FETCH_INGREDIENTS_REQUEST_STARTED";
export const FETCH_INGREDIENTS_REQUEST_SUCCEED =
  "FETCH_INGREDIENTS_REQUEST_SUCCEED";
export const FETCH_INGREDIENTS_REQUEST_FAILED =
  "FETCH_INGREDIENTS_REQUEST_FAILED";

export const SELECT_BUNS = "SELECT_BUNS";

export const INCREASE_INGREDIENT_QUANTITY = "INCREASE_INGREDIENT_QUANTITY";
export const DECREASE_INGREDIENT_QUANTITY = "DECREASE_INGREDIENT";
export const CLEAR_QUANTITY = 'CLEAR_QUANTITY';

export function getIngredients() {
  return function (dispatch) {
    dispatch({
      type: FETCH_INGREDIENTS_REQUEST_STARTED,
    });
    fetchIngredients()
      .then((res) => {
        dispatch({
          type: FETCH_INGREDIENTS_REQUEST_SUCCEED,
          ingredients: res.data.map((ingredient) => ({
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
}
