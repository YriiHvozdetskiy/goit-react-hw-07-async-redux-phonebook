import toast from 'react-hot-toast';
import { DebounceInput } from 'react-debounce-input';
import { nanoid } from 'nanoid';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import s from './ContactForm.module.scss';
import { addContact } from '../../redux/actions/actions';

export const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();
  const { items } = useSelector(state => state.reducer);

  const handleChange = e => {
    const { name, value } = e.target;

    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        return;
    }
  };

  const handleCoincidence = currentName => {
    if (!items) return;
    // якщо імя вже є в контактах повідомляєм і не даєм дод імя поки користувач не зміне його
    if (items.find(({ name }) => name.toLowerCase() === currentName)) {
      toast.error(`${name} is already in contacts`);
      return true;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    // перед відправкою перевіряєм чи таке імя є в списку
    if (handleCoincidence(name.toLowerCase())) return;

    // створюєм обєкт з даних які прийшли з форми + дод id
    const contact = { id: nanoid(), name, number };
    // відправляєм створений контакт через actions методом dispatch в reducer
    dispatch(addContact(contact));

    toast.success(`${name} added a contact`);

    // обнуляєм поля input після создання контакта
    setName('');
    setNumber('');
  };

  return (
    <>
      <form className={s.form} autoComplete="off" onSubmit={handleSubmit}>
        <>
          <label className={s.label}>Name</label>
          <DebounceInput
            className={s.input}
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
            value={name}
            debounceTimeout={300}
            onChange={handleChange}
          />

          {/* <input
              className={s.input}
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
              required
              onChange={handleName}
              value={name}
            /> */}

          <label className={s.label}>Number</label>
          <DebounceInput
            className={s.input}
            type="tel"
            name="number"
            value={number}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            required
            debounceTimeout={300}
            onChange={handleChange}
          />
          {/* <input
              className={s.input}
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
              required
              onChange={handleNumber}
              value={state.number}
            /> */}

          <button className={s.button} type="submit">
            Add contact
          </button>
        </>
      </form>
    </>
  );
};
