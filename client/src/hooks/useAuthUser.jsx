import { useSelector } from 'react-redux';

const useAuthUser = () => {
  const { userData } = useSelector(state => state.authStore);

  return { userData };
};

export default useAuthUser;
