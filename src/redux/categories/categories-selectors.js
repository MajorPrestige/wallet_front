import { createSelector } from '@reduxjs/toolkit';

export const getCategories = ({ categories }) => categories.categories;

export const categorySelectSelector = createSelector(getCategories,
  (categories) => {
  const result = categories.map(it => ({ value: it._id, label: it.name }));
    return result;
  });
