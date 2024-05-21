import { axiosInstance } from '@/lib/axios';
import { useAppSelector } from '@/redux/hooks';

const useGetUserTransaction = () => {
  const { id } = useAppSelector((state) => state.user);
  const getUserDetail = async () => {
    try {
      const { data } = await axiosInstance.get(`/user/transaction/${id}`);

      return data;
    } catch (err) {}
  };
  return { getUserDetail };
};

export default useGetUserTransaction;
