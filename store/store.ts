import { configureStore } from '@reduxjs/toolkit'
import {cartReducer} from './cart/cartSlice'

export const store = configureStore({
    reducer: { cart: cartReducer}
})

export type TypeRootState = ReturnType<typeof store.getState>
// export const makeStore = () => {
//     return configureStore({
//         reducer: {
//             cart: cartReducer,
//         }
//     })
// }
//
// // Infer the type of makeStore
// export type AppStore = ReturnType<typeof makeStore>
// // Infer the `RootState` and `AppDispatch` types from the store itself
// export type RootState = ReturnType<AppStore['getState']>
// export type AppDispatch = AppStore['dispatch']