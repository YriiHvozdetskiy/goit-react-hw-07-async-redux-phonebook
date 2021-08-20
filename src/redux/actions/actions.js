import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { createAction } from '@reduxjs/toolkit';

export const fetchContactsList = createAsyncThunk(
  'contacts/fetchContactsList',
  async () => {
    const result = await axios.get('http://localhost:7777/contacts');
    return result.data;
  },
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async contact => {
    const result = await axios.post('http://localhost:7777/contacts', contact);
    return result.data;
  },
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async id => {
    await axios.delete(`http://localhost:7777/contacts/${id}`);
    return id;
  },
);

// export const filterContacts = createAction({'FILTER_CONTACTS', (searchValue) => {
//   return { payload: searchValue }}
// })
