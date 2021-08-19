import { ADD_CONTACT, FILTER_CONTACTS ,DELETE_CONTACT} from './contacts-types';

// contacts це обєкт з ContactForm який відправляєм через dispatch (useDispatch)
export const addContact = (contact) => ({
  type: ADD_CONTACT,
  payload: contact,
});

// searchValue символи які вели для пошуку контакта в ContactsList
export const filterContacts = (searchValue) => ({
  type: FILTER_CONTACTS,
  payload: searchValue,
});

// value відфільтрований масив БЕЗ контакта який видалили, потім змінюєм state в reducer
export const deleteContact = (value) => ({
  type: DELETE_CONTACT,
  payload: value,
});

// ============ потрібно коли використовуєм чистий Redux ============