import { makeOrder } from "../../utils/api";
import { Errors } from "../../utils/constants";
import { refreshToken } from "./profile";
import {
    CLEAR_INGREDIENTS, CLEAR_QUANTITY,
    CLOSE_ORDER_DETAILS_MODAL,
    OPEN_ORDER_DETAILS_MODAL,
    PLACE_ORDER_REQUEST_FAILED,
    PLACE_ORDER_REQUEST_STARTED,
    PLACE_ORDER_REQUEST_SUCCEED,
} from "../constants";
import { AppDispatch, AppThunk } from "../types";

export interface IPlaceOrderRequestStartedAction {
  readonly type: typeof PLACE_ORDER_REQUEST_STARTED;
}

export interface IPlaceOrderRequestSucceedAction {
  readonly type: typeof PLACE_ORDER_REQUEST_SUCCEED;
}

export interface IPlaceOrderRequestFailedAction {
  readonly type: typeof PLACE_ORDER_REQUEST_FAILED;
}

export interface IOpenOrderDetailsModalAction {
  readonly type: typeof OPEN_ORDER_DETAILS_MODAL;
}

export interface ICloseOrderDetailsModalAction {
  readonly type: typeof CLOSE_ORDER_DETAILS_MODAL;
}

export type TOrderDetailsActions =
  | IPlaceOrderRequestStartedAction
  | IPlaceOrderRequestSucceedAction
  | IPlaceOrderRequestFailedAction
  | IOpenOrderDetailsModalAction
  | ICloseOrderDetailsModalAction;

export const placeOrder: AppThunk =
  (orderIngredientIds, firstAttempt) => (dispatch: AppDispatch) => {
    dispatch({
      type: PLACE_ORDER_REQUEST_STARTED,
    });
    makeOrder({ ingredients: orderIngredientIds })
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
      .catch((err) => {
        if (err.message === Errors.JWT_EXPIRED) {
          dispatch(refreshToken());
          if (firstAttempt) {
            dispatch(placeOrder(orderIngredientIds, false));
          }
        } else {
          dispatch({
            type: PLACE_ORDER_REQUEST_FAILED,
          });
        }
      });
  };
