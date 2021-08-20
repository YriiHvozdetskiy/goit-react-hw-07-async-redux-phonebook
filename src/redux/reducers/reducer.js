import { createSlice } from '@reduxjs/toolkit';
import {
  addContact,
  deleteContact,
  fetchContactsList,
} from '../actions/actions';

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
    // filterContacts:(state, action)=> {
    //   const normalizedFilter = action.payload.toLowerCase();
    //   state.items = state.items.filter(({ name }) => name.toLowerCase().includes(normalizedFilter));
    // },
  },
  extraReducers: {
    [fetchContactsList.fulfilled]: (state, action) => {
      state.items = action.payload;
      state.status = null;
      state.error = null;
    },
    [addContact.fulfilled]: (state, action) => {
      state.items = [action.payload, ...state.items];
      state.status = null;
      state.error = null;
    },
    [deleteContact.fulfilled]: (state, action) => {
      state.items = state.items.filter(
        contact => contact.id !== action.payload,
      );
      state.status = null;
      state.error = null;
    },
  },
});

export const { filterContacts } = contactsReducer.actions;
