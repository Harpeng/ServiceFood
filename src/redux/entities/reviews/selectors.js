const selectorReviewsModule = (state) => state.review;

export const selectReviewsById = (state, id) => selectorReviewsModule(state).entities[id];

export const selectReviewsId = (state) => selectorReviewsModule(state).ids;