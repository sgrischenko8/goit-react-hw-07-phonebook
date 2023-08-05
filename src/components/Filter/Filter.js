import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from 'redux/filterSlice';
import styles from './Filter.module.css';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.filter);

  function changeFilter(event) {
    dispatch(setFilter(event.target.value));
  }
  return (
    <label className={styles.label}>
      Find contacts by name
      <input type="text" value={filter} onChange={changeFilter}></input>
    </label>
  );
};
