import { configureStore } from "@reduxjs/toolkit";
import { PizzaSlice } from "./PizzaSlice";
export const Store = configureStore({
    reducer: {
        pizzas: PizzaSlice.reducer
    }
})