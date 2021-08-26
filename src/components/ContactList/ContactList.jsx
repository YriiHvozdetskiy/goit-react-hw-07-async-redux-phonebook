import { useDispatch, useSelector } from 'react-redux';
import toast from 'react-hot-toast';
import s from '././ContactList.module.scss';
import { deleteContact, fetchContactsList } from '../../redux/actions';
import { useEffect } from 'react';

function ContactList() {
  const dispatch = useDispatch();
  const items = useSelector(state => {
    const { items, filter } = state.reducer;
    const normalizedFilter = filter.toLowerCase();
    return items.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter),
    );
  });

  useEffect(() => {
    dispatch(fetchContactsList());
  }, [dispatch]);

  const removeContact = (id, name) => {
    dispatch(deleteContact(id));
    toast.success(`deleted ${name}`);
  };

  return (
    // рендерем контакти з масиву items || рендерем результати пошуку
    <ul className={s.list}>
      {items &&
        items.map(({ id, name, number }) => {
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

export default ContactList;
