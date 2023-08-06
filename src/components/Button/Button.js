import { useSelector } from 'react-redux';
import { selectLoading } from 'redux/selectors';
import PropTypes from 'prop-types';
import styles from './Button.module.css';

export const Button = ({ children, onClick }) => {
  const loading = useSelector(selectLoading);
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
