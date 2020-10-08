import { createSelector } from 'reselect';

//input selector
const selectCart = state => state.cart;

export const selectCartItems = createSelector(
    [selectCart],
    (cart) => cart.cartItems
);

//output selector
export const selectCartItemsCount = createSelector(
    [selectCartItems],
    cartItems.reduce(
        (accumulatedQuantity, cartItem) => (accumulatedQuantity + cartItem.quantity)
        , 0)
)