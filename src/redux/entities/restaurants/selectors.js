const selectorRestaurantModule = (state) => state.restaurant;

export const selectRestaurantsById = (state, id) =>
selectorRestaurantModule(state).entities[id];

export const selectRestaurantsId = (state) =>
selectorRestaurantModule(state).ids;

export const selectRestaurantsLoadingStatus = (state) =>
selectorRestaurantModule(state).status;

export const selectRestaurantMenuById = (state, id) =>
  selectRestaurantsById(state, id).menu;

export const selectRestaurantReviewsById = (state, id) =>
selectRestaurantsById(state, id).reviews;
