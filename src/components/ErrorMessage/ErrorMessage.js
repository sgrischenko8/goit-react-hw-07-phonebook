import { toast } from 'react-toastify';
import { useEffect } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { useSelector } from 'react-redux';
import { selectError } from 'redux/selectors';

const ErrorMessage = () => {
  const error = useSelector(selectError);

  useEffect(() => {
    toast.error(error);
  }, [error]);
};

export default ErrorMessage;
