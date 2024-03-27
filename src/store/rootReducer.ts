import { combineReducers } from "@reduxjs/toolkit";
import { userReducer } from "./users/reducer";

export const rootReducer = combineReducers({
  users: userReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
