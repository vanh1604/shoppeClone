import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cart";
import productReducer from "./Products";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

const cartPersistConfig = {
  key: "cart",
  storage,
};

const productPersistConfig = {
  key: "products",
  storage,
};

const persistedCartReducer = persistReducer(cartPersistConfig, cartReducer);
const persistedProductReducer = persistReducer(
  productPersistConfig,
  productReducer
);

export const store = configureStore({
  reducer: {
    cart: persistedCartReducer,
    products: persistedProductReducer,
  },
});

export const persistor = persistStore(store);

export default store;
