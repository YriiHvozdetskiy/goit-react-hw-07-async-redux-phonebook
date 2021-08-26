import { useDispatch, useSelector } from 'react-redux';
import toast from 'react-hot-toast';
import s from '././ContactList.module.scss';
import { deleteContact, fetchContactsList } from '../../redux/actions';
import { useEffect } from 'react';
import { getFilteredContacts } from '../../redux/selectors';

export default function ContactList() {
  const dispatch = useDispatch();
  const filteredContacts = useSelector(getFilteredContacts);

  useEffect(() => {
    dispatch(fetchContactsList());
  }, [dispatch]);

  const removeContact = (id, name) => {
    dispatch(deleteContact(id));
    toast.success(`${name} removed `);
  };

  return (
    // рендерем контакти з масиву filteredContacts || рендерем результати пошуку
    <ul className={s.list}>
      {filteredContacts &&
        filteredContacts.map(({ id, name, number }) => {
          return (
            <li className={s.item} key={id}>
              <span>{name}</span>: <span>{number}</span>
              <button
                className={s.button}
                type="button"
                onClick={() => removeContact(id, name)}
              >
                Delete
              </button>
            </li>
          );
        })}
    </ul>
  );
}
