import { useSelector } from 'react-redux';
import { ThemeSwitcher } from './ThemeSwitcher/ThemeSwitcher';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import Loader from './Loader/Loader';
import ErrorMessage from './ErrorMessage/ErrorMessage';
import { ToastContainer } from 'react-toastify';
import styles from './App.module.css';

const App = () => {
  const loading = useSelector(state => state.contacts.isLoading);
  const error = useSelector(state => state.contacts.error);
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
