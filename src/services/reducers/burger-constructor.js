import {
  ADD_INGREDIENT,
  CLEAR_INGREDIENTS,
  MOVE_INGREDIENT,
  REMOVE_INGREDIENT,
  SELECT_BUN,
} from "../constants";
import { v4 as uuid } from "uuid";

const initialState = {
  ingredients: [],
  bun: null,
};

export const burgerConstructorReducer = (state = initialState, action) => {
  switch (action.type) {
    case SELECT_BUN: {
      return {
        ...state,
        bun: action.bun,
      };
    }
    case ADD_INGREDIENT: {
      return {
        ...state,
        ingredients: [
          { ...action.ingredient, uuid: uuid() },
          ...state.ingredients,
        ],
      };
    }
    case REMOVE_INGREDIENT: {
      return {
        ...state,
        ingredients: [...state.ingredients].filter(
          (ingredient) => ingredient.uuid !== action.uuid
        ),
      };
    }
    case MOVE_INGREDIENT: {
      const ingredients = [...state.ingredients];
      [ingredients[action.dragIndex], ingredients[action.hoverIndex]] = [
        ingredients[action.hoverIndex],
        ingredients[action.dragIndex],
      ];
      return {
        ...state,
        ingredients,
      };
    }
    case CLEAR_INGREDIENTS: {
      return {
        ...state,
        ingredients: initialState.ingredients,
        bun: initialState.bun,
      };
    }
    default: {
      return state;
    }
  }
};
