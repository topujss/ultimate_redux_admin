import { toast } from 'react-toastify';

export const toastMsg = (msg, type = 'error') => {
  toast[type](msg, {
    position: 'top-right',
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: false,
    draggable: true,
    progress: undefined,
    theme: 'colored',
    pauseOnHover: false,
  });
};
