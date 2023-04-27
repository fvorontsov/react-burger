export type TIngredientCommon = {
    _id: string;
    name: string;
    type: string;
    proteins: number;
    fat: number;
    carbohydrates: number;
    price: number;
    image: string;
    image_mobile: string;
    image_large: string;
};

export type TCountedIngredient = TIngredientCommon & {
    quantity: number;
};

export type TConstructorIngredient = TIngredientCommon & {
    uuid: string;
    index: number;
};

export type TConstructorList = {
    ingredients: TConstructorIngredient[];
};

export type TConstructorCard = {
    ingredient: TConstructorIngredient;
    index: number;
};

export type TIngredientsList = {
    title: string;
    ingredients: TCountedIngredient[];
    onElementClick: (ingredient: TCountedIngredient) => void;
};

export type TIngredientCard = {
    ingredient: TCountedIngredient;
    onElementClick: (ingredient: TCountedIngredient) => void;
};
