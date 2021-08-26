import { Toaster } from 'react-hot-toast';
import { useSelector } from 'react-redux';
import Filter from 'components/Filter/Filter';
import Title from './components/Title/Title';
import ContactList from 'components/ContactList/ContactList';
import { ContactForm } from './components/ContactForm/ContactForm';
import { getContacts } from './redux/selectors';

export function App() {
  const contacts = useSelector(getContacts);

  return (
    <>
      <Title>Phonebook</Title>
      <ContactForm />
      {/*рендерем Filter,Title тільки тоді коли щось є в state із reducer*/}
      {contacts.length !== 0 && <Title>Contacts</Title>}
      {contacts.length !== 0 && <Filter />}
      <ContactList />
      <Toaster
        toastOptions={{
          success: {
            style: {
              background: 'green',
              color: '#fff',
            },
          },
          error: {
            style: {
              background: 'red',
              color: '#fff',
            },
          },
        }}
      />
    </>
  );
}
