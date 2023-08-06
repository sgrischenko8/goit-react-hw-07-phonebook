import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/operations';
import { Button } from 'components/Button/Button';
import PropTypes from 'prop-types';

export const ContactListItem = ({ contact }) => {
  const dispatch = useDispatch();
  function handleDelete() {
    dispatch(deleteContact(contact.id));
  }
  return (
    <>
      {contact.name}: {contact.phone}
      <Button onClick={handleDelete}>Delete</Button>
    </>
  );
};

ContactListItem.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
  }).isRequired,
};
