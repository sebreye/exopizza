import { createSlice } from "@reduxjs/toolkit";
import Json from "./data.json"
const menu = Json.pizzas
export const PizzaSlice = createSlice({
    name: "pizza", 
    initialState: {
        menu: menu, 
        panier: [], 
        idCounter: 0, 
        sortByPrice: "", 
        Pprice: 0,
    },
    reducers: 
    {
        addTask: (state, action) => {
            const pizza = { ...action.payload, id: state.idCounter };
            state.panier.push(pizza);
            state.Pprice += pizza.prix; 
            state.idCounter++;
        },
        removeTask: (state, action) => {
            const index = state.panier.findIndex(pizza => pizza.id === action.payload.id);
            if (index !== -1) {
                const pizzaToRemove = state.panier[index];
                state.panier.splice(index, 1);
                state.Pprice -= pizzaToRemove.prix; 
            }
        },
            sortPizzaByPrice: (state, action) => {
                state.sortByPrice = action.payload;
                state.menu.sort((a, b) => {
                    if (action.payload === "asc") {
                        return a.prix - b.prix;
                    } else if (action.payload === "desc") {
                        return b.prix - a.prix;
                    } else {
                        return 0;
                    }
                });
            }
        
    },
    
})
export const { addTask, removeTask, sortPizzaByPrice } = PizzaSlice.actions;