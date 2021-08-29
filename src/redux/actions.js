import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchContactsList = createAsyncThunk(
  'contacts/fetchContactsList',
  async (_, { rejectWithValue }) => {
    try {
      const result = await axios.get('http://localhost:7777/contacts');
      return result.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (contact, { rejectWithValue }) => {
    try {
      const result = await axios.post(
        'http://localhost:7777/contacts',
        contact,
      );

      return result.data;
    } catch (error) {
      // return error.message;
      // return Promise.reject(new Error('Ой щось пішло не так :('));
      // return rejectWithValue( JSON.stringify(Promise.reject(new Error('Ой щось пішло не так :('))));
      // const newError = error.message = 'Ой щось пішло не так :(';
      // return  rejectWithValue(newError)
      return rejectWithValue(error.message);
    }
  },
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id, { rejectWithValue }) => {
    try {
      await axios.delete(`http://localhost:7777/contacts/${id}`);
      return id;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);
