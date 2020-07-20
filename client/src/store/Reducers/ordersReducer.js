import * as actionTypes from "../actions/orderActionTypes";

const initState = {
    cart: [],
    sizes: [],
    selectedSize: null,
    showCart: false,
};

const reducer = (state = initState, action) => {
    switch (action.type) {
        case actionTypes.ADD_TO_CART:
            console.log(action.size);
            return {
                ...state,
                cart: state.cart.concat(action.data),
                sizes: state.sizes.concat(action.size),
            };
        case actionTypes.DELETE_FROM_CART:
            return {
                ...state,
                cart: state.cart.filter((p) => p._id !== action.id),
            };
        case actionTypes.TOGGLE_CART:
            return {
                ...state,
                showCart: !state.showCart,
            };
        case actionTypes.SELECT_SIZE:
            return {
                ...state,
                selectedSize: action.size,
            };
        default:
            return state;
    }
};

export default reducer;
