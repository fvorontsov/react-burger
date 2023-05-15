import {
  CLEAR_QUANTITY,
  DECREASE_INGREDIENT_QUANTITY,
  FETCH_INGREDIENTS_REQUEST_FAILED,
  FETCH_INGREDIENTS_REQUEST_STARTED,
  FETCH_INGREDIENTS_REQUEST_SUCCEED,
  INCREASE_INGREDIENT_QUANTITY,
  SELECT_BUNS,
} from "../constants";
import { IngredientType } from "../../utils/constants";

const initialState = {
  ingredients: [],
  fetchIngredientsInProgress: false,
  fetchIngredientsFailed: false,
};

export const burgerIngredientsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_INGREDIENTS_REQUEST_STARTED: {
      return {
        ...state,
        fetchIngredientsInProgress: true,
      };
    }
    case FETCH_INGREDIENTS_REQUEST_SUCCEED: {
      return {
        ...state,
        fetchIngredientsInProgress: false,
        fetchIngredientsFailed: false,
        ingredients: action.ingredients,
      };
    }
    case FETCH_INGREDIENTS_REQUEST_FAILED: {
      return {
        ...state,
        fetchIngredientsInProgress: false,
        fetchIngredientsFailed: true,
        ingredients: [],
      };
    }
    case SELECT_BUNS: {
      return {
        ...state,
        ingredients: [...state.ingredients].map((ingredient) => {
          if (ingredient.type === IngredientType.BUN) {
            return {
              ...ingredient,
              quantity: ingredient._id === action._id ? 2 : 0,
            };
          } else {
            return ingredient;
          }
        }),
      };
    }
    case INCREASE_INGREDIENT_QUANTITY: {
      return {
        ...state,
        ingredients: [...state.ingredients].map((ingredient) => {
          return ingredient._id === action._id
            ? {
                ...ingredient,
                quantity: ingredient.quantity + 1,
              }
            : ingredient;
        }),
      };
    }
    case DECREASE_INGREDIENT_QUANTITY: {
      return {
        ...state,
        ingredients: [...state.ingredients].map((ingredient) => {
          return ingredient._id === action._id
            ? {
                ...ingredient,
                quantity: ingredient.quantity - 1,
              }
            : ingredient;
        }),
      };
    }
    case CLEAR_QUANTITY: {
      return {
        ...state,
        ingredients: [...state.ingredients].map(ingredient => ({ ...ingredient, quantity: 0 })),
      }
    }
    default: {
      return state;
    }
  }
};
