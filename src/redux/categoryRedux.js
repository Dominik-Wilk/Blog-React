import { createSelector } from '@reduxjs/toolkit';

const categories = state => state.category;

export const getCategories = createSelector(
  [categories],
  categories => categories
);

const categoryReducer = (statePart = [], action) => {
  switch (action.type) {
    default:
      return statePart;
  }
};
export default categoryReducer;
