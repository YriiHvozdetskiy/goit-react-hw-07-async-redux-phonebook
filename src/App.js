import { Toaster } from 'react-hot-toast';
import { useSelector } from 'react-redux';
import Filter from 'components/Filter/Filter';
import Title from './components/Title/Title';
import ContactList from 'components/ContactList/ContactList';
import { ContactForm } from './components/ContactForm/ContactForm';

export function App() {
  const { items } = useSelector((state) =>state.contacts.contacts);

  return (
    <>
      <Title>Phonebook</Title>
      <ContactForm />
      {/*рендерем Filter,Title тільки тоді коли щось є в state із reducer*/}
      {items.length !== 0 && <Title>Contacts</Title>}
      {items.length !== 0 && <Filter />}
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

//=============== clean Redux ===============

// import { Toaster } from 'react-hot-toast';
// import { useSelector } from 'react-redux';
// import Filter from 'components/Filter/Filter';
// import Title from './components/Title/Title';
// import ContactList from 'components/ContactList/ContactList';
// import { ContactForm } from './components/ContactForm/ContactForm';
//
// export function App() {
//   const { items } = useSelector((state) => (state.contacts.contacts));
//
//   return (
//     <>
//       <Title>Phonebook</Title>
//       <ContactForm />
//       <Title>Contacts</Title>
//       {/*рендерем Filter тільки тоді коли щось є в state із reducer*/}
//       {items.length !== 0 && <Filter />}
//       <ContactList />
//       <Toaster
//         toastOptions={{
//           success: {
//             style: {
//               background: 'green',
//               color: '#fff',
//             },
//           },
//           error: {
//             style: {
//               background: 'red',
//               color: '#fff',
//             },
//           },
//         }}
//       />
//     </>
//   );
// }
//
