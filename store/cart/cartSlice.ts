import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {CarCartProps} from "@types";


const initialState: CarCartProps[] = [];

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addCar: (state, action:PayloadAction<CarCartProps>) => {
            state.push(action.payload);
        },
        removeCar: (state, action:PayloadAction<{ id: number }>) => {
            return state.filter(p => p.id !== action.payload.id)
        }
    },
})

export const cartReducer = cartSlice.reducer;
export const cartActions = cartSlice.actions;