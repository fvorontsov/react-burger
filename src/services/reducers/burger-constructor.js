import {
  ADD_INGREDIENT,
  MOVE_INGREDIENT,
  REMOVE_INGREDIENT,
  SELECT_BUN,
} from "../actions/burger-constructor";

const initialState = {
  ingredients: [],
  bun: {},
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
        ingredients: [action.ingredient, ...state.ingredients],
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
    default: {
      return state;
    }
  }
};
