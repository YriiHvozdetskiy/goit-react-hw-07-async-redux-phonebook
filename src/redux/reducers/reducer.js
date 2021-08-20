import { createSlice } from '@reduxjs/toolkit';
//щоб встановити json-server переходем в папку server через cd і пишем npm init ,встановлюєм json-server, в

export const contactsReducer = createSlice({
  name: 'contacts',
  initialState: {
    contacts: [],
    status: null,
    error: null,
  },
  extraReducers: {},
});
