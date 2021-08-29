import { createSlice } from '@reduxjs/toolkit';
import { addContact, deleteContact, fetchContactsList } from './actions';

export const contactsReducer = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    filter: '',
    status: null,
    error: null,
  },
  reducers: {
    filterContacts: (state, action) => {
      state.filter = action.payload;
    },
  },
  extraReducers: {
    [fetchContactsList.fulfilled]: (state, action) => {
      state.items = action.payload;
      state.status = null;
      state.error = null;
    },
    [fetchContactsList.pending]: (state, action) => {
      state.status = 'loading';
    },
    [fetchContactsList.rejected]: (state, action) => {
      state.status = null;
      state.error = action.payload;
    },

    [addContact.fulfilled]: (state, action) => {
      state.items = [action.payload, ...state.items];
      state.status = null;
      state.error = null;
    },
    [addContact.pending]: (state, action) => {
      state.status = 'loading';
    },
    [addContact.rejected]: (state, action) => {
      state.status = null;
      state.error = action.payload;
    },

    [deleteContact.fulfilled]: (state, action) => {
      state.items = state.items.filter(
        contact => contact.id !== action.payload,
      );
      state.status = null;
      state.error = null;
    },
    [deleteContact.pending]: (state, action) => {
      state.status = 'loading';
    },
    [deleteContact.rejected]: (state, action) => {
      state.error = action.payload;
      state.status = null;
    },
  },
});

export const { filterContacts } = contactsReducer.actions;
