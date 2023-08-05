import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import styles from './Button.module.css';

export const Button = ({ children, onClick }) => {
  const loading = useSelector(state => state.contacts.isLoading);
  return (
    <button
      className={styles.btn}
      type={children === 'Add contact' ? 'submit' : 'button'}
      onClick={() => onClick()}
      disabled={loading ? true : false}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};
