import { useSelector } from 'react-redux';
import { ContactListItem } from './ContactListItem/ContactListItem';
import { selectContactsToRender } from 'redux/selectors';
import styles from './ContactList.module.css';

export const ContactList = () => {
  const contacts = useSelector(selectContactsToRender);

  return (
    <ul>
      {contacts.map(el => (
        <li key={el.id} className={styles.item}>
          {contacts && <ContactListItem contact={el} />}
        </li>
      ))}
    </ul>
  );
};
