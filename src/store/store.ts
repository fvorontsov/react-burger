import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import constructorReducer from "./reducers/BurgerConstructorSlice";
import ingredientsReducer from "./reducers/BurgerIngredientsSlice";
import ingredientDetailsReducer from "./reducers/IngredientDetailsSlice";
import orderDetailsReducer from "./reducers/OrderDetailsSlice";
import userSliceReducer from "./reducers/UserSlice";
import feedSliceReducer from "./reducers/FeedSlice";
import ordersSliceReducer from "./reducers/OrdersSlice";
import { socketMiddleware } from "./middleware/socketMiddleware";
import { feedWSStoreActions } from "./actions/FeedActions";
import { ordersWSStoreActions } from "./actions/OrdersActions";

const rootReducer = combineReducers({
  constructorReducer,
  ingredientsReducer,
  ingredientDetailsReducer,
  orderDetailsReducer,
  userSliceReducer,
  feedSliceReducer,
  ordersSliceReducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(
        socketMiddleware(feedWSStoreActions),
        socketMiddleware(ordersWSStoreActions)
      ),
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
