const selectorUsersModule = (state) => state.user;

export const selectUsersById = (state, id) => selectorUsersModule(state).entities[id];

export const selectUsersId = (state) => selectorUsersModule(state).ids;