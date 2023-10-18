const selectorRestarauntsModule = (state) => state.restaurant;

export const selectRestarauntsById = (state, id) => selectorRestarauntsModule(state).entities[id];

export const selectRestarauntsId = (state) => selectorRestarauntsModule(state).ids;