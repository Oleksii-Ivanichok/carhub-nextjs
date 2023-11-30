import {useDispatch} from "@node_modules/react-redux";
import {bindActionCreators} from "@reduxjs/toolkit";

import {cartActions} from "@store/cart/cartSlice";

const allActions = {
    ...cartActions
}
export const useActions = () => {
    const dispatch = useDispatch()
    return bindActionCreators(allActions, dispatch)
}