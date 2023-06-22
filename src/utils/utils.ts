import { createAsyncThunk } from "@reduxjs/toolkit";
import { TCorrectOrder, TOrders } from "../types/order";
import { TCountedIngredient, TIngredientCommon } from "../types";

export function formatDate(date: string) {
  const dateToFormat = new Date(date);
  const currentDate = new Date();
  const daysAgo = currentDate.getDay() - dateToFormat.getDay();
  const hours =
    dateToFormat.getHours() > 9
      ? dateToFormat.getHours().toString()
      : "0" + dateToFormat.getHours().toString();
  const minutes =
    dateToFormat.getMinutes() > 9
      ? dateToFormat.getMinutes().toString()
      : "0" + dateToFormat.getMinutes().toString();

  let formattedDate = "";
  const time = `${hours}:${minutes} i-GMT+${
    -dateToFormat.getTimezoneOffset() / 60
  }`;
  switch (true) {
    case daysAgo === 0: {
      formattedDate += "Сегодня, ";
      break;
    }
    case daysAgo === 1: {
      formattedDate += "Вчера, ";
      break;
    }
    case daysAgo > 9 && daysAgo % 10 === 1: {
      formattedDate += `${daysAgo} дня назад, `;
      break;
    }
    case daysAgo > 9 && daysAgo % 10 > 1 && daysAgo % 10 < 5: {
      formattedDate += `${daysAgo} дня назад, `;
      break;
    }
    default: {
      formattedDate += `${daysAgo} дней назад, `;
      break;
    }
  }
  return `${formattedDate + time}`;
}

export const createAppAsyncThunk = createAsyncThunk.withTypes<{
  rejectValue: string;
}>();

export const getErrorDescription = (
  error: any,
  defaultMessage: string = "Unknown error"
): string => {
  return error instanceof Object ? error.toString() : defaultMessage;
};

export const logErrorDescription = (
  error: any,
  defaultMessage: string = "Unknown error"
) => {
  console.log(getErrorDescription(error, defaultMessage));
};

export const getCorrectOrders = (
  orders: TOrders,
  data: TIngredientCommon[]
) => {
  const correctOrders: TCorrectOrder[] = [];
  orders.forEach((order) => {
    const { ingredients, ...rest } = order;
    const correctIngredients = getIngredients(order.ingredients, data);
    if (correctIngredients.length) {
      correctOrders.push({ ...rest, ingredients: correctIngredients });
    }
  });
  return correctOrders;
};

export const getIngredients = (ids: string[], data: TIngredientCommon[]) => {
  const result: TCountedIngredient[] = [];

  const ingredients = new Map<string, number>();
  const buns = new Set();

  ids.forEach((id) => {
    const count = ingredients.get(id);
    if (count) {
      ingredients.set(id, count + 1);
    } else {
      ingredients.set(id, 1);
    }
  });

  if (data.length) {
    for (let [id, count] of ingredients) {
      data.forEach((ingredient) => {
        if (ingredient._id === id) {

          if (ingredient.type === "bun") {
            buns.add(id);
            count = 2;
          }
          result.push({ ...ingredient, quantity: count });
        }
      });
    }
  }
  if (buns.size === 1) {
      return result;
  }
  return [];
};


export const getDoneInProgressOrders = (orders: TCorrectOrder[]) => {
  const done: number[] = [];
  const inProgress: number[] = [];
  orders.forEach((order) => {
    if (order.status === 'done') {
      done.push(order.number);
    } else {
      inProgress.push(order.number);
    }
  });
  return { done, inProgress };
};
