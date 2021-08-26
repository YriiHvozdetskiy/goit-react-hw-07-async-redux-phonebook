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
