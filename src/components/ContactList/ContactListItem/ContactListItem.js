import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/operations';
import { Button } from 'components/Button/Button';
import PropTypes from 'prop-types';
import Loader from '../..//Loader/Loader';

export const ContactListItem = ({ contact }) => {
  const loading = useSelector(state => state.contacts.isLoading);
  const dispatch = useDispatch();
  function handleDelete() {
    dispatch(deleteContact(contact.id));
  }
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          {contact.name}: {contact.phone}
          <Button onClick={handleDelete}>Delete</Button>
        </>
      )}
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
