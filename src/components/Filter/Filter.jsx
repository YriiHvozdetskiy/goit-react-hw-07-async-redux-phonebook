import { useDispatch } from 'react-redux';
import s from './Filter.module.scss';
import { filterContacts } from '../../redux/reducers/reducer';

function Filter() {
  const dispatch = useDispatch();

  const changeFilter = e => {
    const searchValue = e.target.value; // value яке вели для пошуку контакта з input
    dispatch(filterContacts(searchValue)); // відправляєм в reducer
  };

  return (
    <>
      <label className={s.label}>Find contacts by name</label>
      <input className={s.input} onChange={changeFilter} />
    </>
  );
}

export default Filter;
