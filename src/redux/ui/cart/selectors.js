const selectorCartModule = (state) => state.cart;

export const selectDishAmountId = (state, dishId) => selectorCartModule(state)[dishId] || 0;