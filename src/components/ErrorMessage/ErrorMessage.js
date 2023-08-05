import { toast } from 'react-toastify';
import { useEffect } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { useSelector } from 'react-redux';

const ErrorMessage = () => {
  const error = useSelector(state => state.contacts.error);

  useEffect(() => {
    toast.error(error);
  }, [error]);
};

export default ErrorMessage;
