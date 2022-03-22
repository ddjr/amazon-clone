export const initialState = {
    basket: [],
    user: null
}

export const getBasketTotal = (basket) => {
    let total = 0;
    basket?.map((item, _) => ( total += item.price ))
    return total;
}

const reducer = (state, action) => {
    console.log(action)
    switch(action.type) {
        case "ADD_TO_BASKET": 
            return {
                ...state,
                basket: [...state.basket, action.item]
            }
        case 'REMOVE_FROM_BASKET':
            return {
                ...state,
                basket: state.basket.filter(item => item.basketId !== action.basketId)
            }
        case "SET_USER":
            return {
                ...state,
                user: action.user
            }
        default:
            return 
    } 
}

export default reducer