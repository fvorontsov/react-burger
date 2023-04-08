import { makeOrder } from "../../utils/api";
import { CLEAR_QUANTITY } from "./burger-ingredients";
import { CLEAR_INGREDIENTS } from "./burger-constructor";

export const PLACE_ORDER_REQUEST_STARTED = "PLACE_ORDER_REQUEST_STARTED";
export const PLACE_ORDER_REQUEST_SUCCEED = "PLACE_ORDER_REQUEST_SUCCEED";
export const PLACE_ORDER_REQUEST_FAILED = "PLACE_ORDER_REQUEST_FAILED";

export const OPEN_ORDER_DETAILS_MODAL = "OPEN_ORDER_DETAILS_MODAL";
export const CLOSE_ORDER_DETAILS_MODAL = "CLOSE_ORDER_DETAILS_MODAL";

export function placeOrder(orderIngredientIds) {
  return function (dispatch) {
    dispatch({
      type: PLACE_ORDER_REQUEST_STARTED,
    });
    makeOrder({ ingredientIds: orderIngredientIds })
      .then((res) => {
        dispatch({
          type: PLACE_ORDER_REQUEST_SUCCEED,
          orderId: res.order.number.toString(),
        });
        dispatch({
          type: OPEN_ORDER_DETAILS_MODAL,
        });
        dispatch({ type: CLEAR_INGREDIENTS });
        dispatch({ type: CLEAR_QUANTITY });
      })
      .catch(() => {
        dispatch({
          type: PLACE_ORDER_REQUEST_FAILED,
        });
      });
  };
}
