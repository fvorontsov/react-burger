export const SELECT_INGREDIENT = "SELECT_INGREDIENT";
export const DESELECT_INGREDIENT = "DESELECT_INGREDIENT";

export const OPEN_INGREDIENT_DETAILS_MODAL = "OPEN_INGREDIENT_DETAILS_MODAL";
export const CLOSE_INGREDIENT_DETAILS_MODAL = "CLOSE_INGREDIENT_DETAILS_MODAL";

export function selectIngredient(ingredient) {
  return {
    type: SELECT_INGREDIENT,
    selectedIngredient: ingredient,
  };
}
