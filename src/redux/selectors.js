export const getContacts = state => state.reducer.items;
export const getFilter = state => state.reducer.filter;

//композитний / складний селектор selector
export const getFilteredContacts = state => {
  const contacts = getContacts(state);
  const filter = getFilter(state);
  const normalizedFilter = filter.toLowerCase();

  return contacts.filter(({ name }) =>
    name.toLowerCase().includes(normalizedFilter),
  );
};

// мемоізація (в нашому випадку не потрібна)

// import { createSelector } from '@reduxjs/toolkit';
//
// export const getFilteredContacts = createSelector(
//   [getContacts, getFilter],
//   (contacts, filter) => {
//     const normalizedFilter = filter.toLowerCase();
//
//     return contacts.filter(({ name }) =>
//       name.toLowerCase().includes(normalizedFilter),
//     );
//   },
// );
