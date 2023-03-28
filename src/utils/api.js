import { urls } from "./urls";

export const fetchIngredients = () => {
  return fetch(`${urls.base}/${urls.general.ingredients}`, {
    method: "GET",
  }).then(responseOrError);
};

export const makeOrder = ({ ingredientIds }) => {
  return fetch(`${urls.base}/${urls.general.orders}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ ingredients:ingredientIds }),
  }).then(responseOrError);
};

const responseOrError = (res) => {
  if (res.ok) {
    return res.json();
  } else {
    return res.json().then((err) => {
      const error = new Error(err.message);
      error.status = res.status;
      throw error;
    });
  }
};
