import { configureStore } from "@reduxjs/toolkit";
import { updateProcessReducer } from "./features/updateProcessSlice";

export const makeStore = () => {
  return configureStore({
    reducer: { updateProccess: updateProcessReducer },
  });
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
