import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ThemeSwitcher } from './ThemeSwitcher/ThemeSwitcher';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import Loader from './Loader/Loader';
import ErrorMessage from './ErrorMessage/ErrorMessage';
import { ToastContainer } from 'react-toastify';
import { selectLoading, selectError } from 'redux/selectors';
import { fetchContacts } from 'redux/operations';
import styles from './App.module.css';

const App = () => {
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <main className={styles.main}>
          {error && <ErrorMessage />}
          <ThemeSwitcher />
          <h1>Phonebook</h1>
          <ContactForm />

          <h2>Contacts</h2>
          <Filter />

          <ContactList />
          <ToastContainer theme="colored" autoClose={1000} />
        </main>
      )}
    </>
  );
};
export default App;
