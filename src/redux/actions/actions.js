import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async contact => {
    const result = await axios.post('http://localhost:7777/contacts', contact);
    return result.data;
  },
);
