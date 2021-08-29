import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';

export const fetchContactsList = createAsyncThunk(
  'contacts/fetchContactsList',
  async (_, { rejectWithValue }) => {
    try {
      const result = await axios.get('http://localhost:7777/contacts');
      return result.data;
    } catch (error) {
      // показуєм що сталася помилка і відправляєм текст помилки в reducer (error)
      toast.error('Ой щось пішло не так :(');
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
      //показуєм що дод контакт коли запрос на сервер успішний
      toast.success(`${contact.name} added to contact`);
      return result.data;
    } catch (error) {
      // показуєм що сталася помилка і відправляєм текст помилки в reducer (error
      toast.error('Ой щось пішло не так :(');
      return rejectWithValue(error.message);
    }
  },
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id, { rejectWithValue }) => {
    try {
      await axios.delete(`http://localhost:7777/contacts/${id}`);
      //показуєм що удалили контакт коли запрос на сервер успішний
      toast.success(`removed `);
      return id;
    } catch (error) {
      // показуєм що сталася помилка і відправляєм текст помилки в reducer (error
      toast.error('Ой щось пішло не так :(');
      return rejectWithValue(error.message);
    }
  },
);
