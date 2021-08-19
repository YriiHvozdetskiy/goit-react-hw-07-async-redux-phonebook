import { useDispatch, useSelector } from 'react-redux';
import toast from 'react-hot-toast';
import { deleteContact } from '../../redux/reducers/reducer';
import s from '././ContactList.module.scss';

function ContactList() {
  //TODO виправити баг коли фільтруєм список з декількох контактів і видаляєм контакт який від фільтрували, щоб зявлявся список з рештою контактів
  const dispatch = useDispatch();
  const items = useSelector((state) => { //в useSelector приходе глобальний  state з store
    const { items, filter } = state.contacts.contacts; // деструк з raducera поля обєкта

    const normalizedFilter = filter.toLowerCase();
    return items.filter(({ name }) => name.toLowerCase().includes(normalizedFilter));
  });

  const removeContact = id => { // отримуємо id контакта який потрібно видалити при кліку на кнопку
    // створюєм новий масив БЕЗ контакта як потрібно видалити
    const value = items.filter(contact => contact.id !== id);
    // відправляєм новий масив в reducer в state
    dispatch(deleteContact(value));
    toast.success(`deleted contact`);
  };

  return (
    // рендерем контакти з масиву items || рендерем результати пошуку
    <ul className={s.list}>
      {items && items.map(({ id, name, number }) => {
        return (
          <li className={s.item} key={id}>
            <span>{name}</span>: <span>{number}</span>
            <button
              className={s.button}
              type='button'
              onClick={() => removeContact(id)}
            >
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
}

export default ContactList;

//=============== clean Redux ===============

// import { useDispatch, useSelector } from 'react-redux';
// import toast from 'react-hot-toast';
// import { deleteContact } from '../../redux/actions/actions';
// import s from '././ContactList.module.scss';
//
// function ContactList() {
//   //TODO виправити баг коли фільтруєм список з декількох контактів і видаляєм контакт який від фільтрували, щоб зявлявся список з рештою контактів
//   //в useSelector приходе глобальний  state з store(обєкт що повертає функ combineReducers) в якому вибераєм відповідне поле (contacts:contactsReducer),
//   // де знаходиться обєкт з reducera:
//   // initialState = {
//   //   contacts: {
//   //     items: [],
//   //     filter: '',
//   //   },
//   // };
//
//   // items це вже відфільтрований масив з reducera
//   // items рендере список контактів які ми додали і коли в Filter робем пошук показує результати (відфільтрований масив з результатами пошуку)
//   const items = useSelector((state) => {
//     const { items, filter } = state.contacts.contacts; // деструк з raducera поля обєкта
//
//     const normalizedFilter = filter.toLowerCase();
//     return items.filter(({ name }) => name.toLowerCase().includes(normalizedFilter)); // повертаєм відфільтрований масив з результатами пошуку
//   });
//
//   const dispatch = useDispatch();
//
//   const removeContact = id => { // отримуємо id контакта який потрібно видалити при кліку на кнопку
//     // створюєм новий масив БЕЗ контакта як потрібно видалити
//     const value = items.filter(contact => contact.id !== id);
//     // відправляєм новий масив в reducer в state
//     dispatch(deleteContact(value));
//     toast.success(`deleted contact`);
//   };
//
//   return (
//     // рендерем контакти з масиву items || рендерем результати пошуку
//     <ul className={s.list}>
//       {items && items.map(({ id, name, number }) => {
//         return (
//           <li className={s.item} key={id}>
//             <span>{name}</span>: <span>{number}</span>
//             <button
//               className={s.button}
//               type='button'
//               onClick={() => removeContact(id)}
//             >
//               Delete
//             </button>
//           </li>
//         );
//       })}
//     </ul>
//   );
// }
//
// export default ContactList;
