import {
    PLACE_ORDER_REQUEST_STARTED,
    PLACE_ORDER_REQUEST_SUCCEED,
    PLACE_ORDER_REQUEST_FAILED,
    OPEN_ORDER_DETAILS_MODAL,
    CLOSE_ORDER_DETAILS_MODAL,
} from "../actions/order-details";

const initialState = {
    orderId: '',
    makeOrderRequestInProgress: false,
    makeOrderRequestFailed: false,
    modalIsOpen: false,
};

export const orderDetailsReducer = (state = initialState, action) => {
    switch (action.type) {
        case PLACE_ORDER_REQUEST_STARTED: {
            return {
                ...state,
                makeOrderRequestInProgress: true,
            }
        }
        case PLACE_ORDER_REQUEST_SUCCEED: {
            return {
                ...state,
                makeOrderRequestInProgress: false,
                makeOrderRequestFailed: false,
                orderId: action.orderId,
            }
        }
        case PLACE_ORDER_REQUEST_FAILED: {
            return {
                ...state,
                makeOrderRequestInProgress: false,
                makeOrderRequestFailed: true,
                orderId: '',
            }
        }
        case OPEN_ORDER_DETAILS_MODAL: {
            return {
                ...state,
                modalIsOpen: true,
            }
        }
        case CLOSE_ORDER_DETAILS_MODAL: {
            return {
                ...state,
                modalIsOpen: false,
            }
        }
        default: {
            return state;
        }
    }
};
