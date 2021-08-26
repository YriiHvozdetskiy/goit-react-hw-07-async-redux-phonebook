import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './reducers/reducer';

export const store = configureStore({
  reducer: contactsReducer,
});
