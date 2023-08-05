import { useSelector, useDispatch } from 'react-redux';
import { addContact } from 'redux/operations';
import { Formik, Form, Field } from 'formik';
import { Button } from 'components/Button/Button';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styles from './ContactForm.module.css';

const initialValues = { name: '', phone: '' };

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.items);

  function handleSubmit(values, actions) {
    if (!contacts) {
      return;
    }
    if (values.name.trim() === '' || values.phone.trim() === '') {
      return;
    }
    if (
      contacts.some(
        item => item?.name.toLowerCase() === values.name.toLowerCase()
      )
    ) {
      return toast.error(`${values.name} is already in contacts.`);
    }

    dispatch(addContact(values));
    actions.resetForm();
  }

  function dummyClick() {
    return;
  }

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <Form className={styles.form}>
        <label htmlFor="name" className={styles.label}>
          Name
        </label>
        <Field
          className={styles.input}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я])$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        />

        <label htmlFor="number" className={styles.label}>
          Number
        </label>
        <Field
          className={styles.input}
          type="tel"
          name="phone"
          pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        />
        <Button onClick={dummyClick}>Add contact</Button>
      </Form>
    </Formik>
  );
};
