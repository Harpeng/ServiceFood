const selectorRestarauntsModule = (state) => state.restaurant;

export const selectRestarauntsById = (state, id) =>
  selectorRestarauntsModule(state).entities[id];

export const selectRestarauntsId = (state) =>
  selectorRestarauntsModule(state).ids;

export const selectRestarauntsLoadingStatus = (state) =>
  selectorRestarauntsModule(state).status;

export const selectRestarauntMenuById = (state, id) =>
  selectRestarauntsById(state, id).menu;

export const selectRestaurantReviewsById = (state, id) =>
selectRestarauntsById(state, id).reviews;
