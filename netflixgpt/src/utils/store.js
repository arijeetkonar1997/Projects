import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
export const store = new configureStore(
    {
        reducer: {
            user: userReducer,
          },
    }
);