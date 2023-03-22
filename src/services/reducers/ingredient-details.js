import {
  CLOSE_INGREDIENT_DETAILS_MODAL,
  DESELECT_INGREDIENT,
  OPEN_INGREDIENT_DETAILS_MODAL,
  SELECT_INGREDIENT,
} from "../actions/ingredient-details";

const initialState = {
  selectedIngredient: {},
  modalIsOpen: false,
};

export const ingredientDetailsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SELECT_INGREDIENT: {
      return {
        ...state,
        selectedIngredient: action.selectedIngredient,
      };
    }
    case DESELECT_INGREDIENT: {
      return {
        ...state,
        selectedIngredient: null,
      };
    }
    case OPEN_INGREDIENT_DETAILS_MODAL: {
      return {
        ...state,
        modalIsOpen: true,
      };
    }
    case CLOSE_INGREDIENT_DETAILS_MODAL: {
      return {
        ...state,
        modalIsOpen: false,
      };
    }
    default: {
      return state;
    }
  }
};
