import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/operations';
import { ContactListItem } from './ContactListItem/ContactListItem';
import styles from './ContactList.module.css';

export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.items);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const filter = useSelector(state => state.filter);

  function getContactsToRender() {
    if (!filter) {
      return contacts;
    }
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  }

  const contactToRender = [...getContactsToRender()].sort((a, b) =>
    a.name.localeCompare(b.name)
  );

  return (
    <ul>
      {contactToRender.map(el => (
        <li key={el.id} className={styles.item}>
          {contacts && <ContactListItem contact={el} />}
        </li>
      ))}
    </ul>
  );
};
