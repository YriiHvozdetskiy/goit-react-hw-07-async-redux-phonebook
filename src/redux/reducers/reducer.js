import { createSlice } from '@reduxjs/toolkit';
import { addContact, fetchContactsList } from '../actions/actions';

export const contactsReducer = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    status: null,
    error: null,
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
  },
});
