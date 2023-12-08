const selectorDishesModule = (state) => state.dish;

export const selectDishesById = (state, id) => selectorDishesModule(state).entities[id];

export const selectDishesId = (state) => selectorDishesModule(state).ids;
