// import { configureStore } from "@reduxjs/toolkit";
// import myReducer from "./cartSlice";
// const store= configureStore({
//     reducer:{
//          mycart:myReducer
//     }
// })


// export default store;






import { configureStore } from "@reduxjs/toolkit";
import myReducer from "./cartSlice";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // uses localStorage
import { combineReducers } from "redux";

// Combine all reducers if needed (even if you have just one)
const rootReducer = combineReducers({
  mycart: myReducer,
});

// Configuration for persistence
const persistConfig = {
  key: "root",
  storage,
};

// Create a persisted reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Create store
const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // needed for redux-persist
    }),
});

export const persistor = persistStore(store);
export default store;
