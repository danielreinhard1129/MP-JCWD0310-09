'use client';

import { axiosInstance } from '@/lib/axios';
import { User } from '@/types/user.type';
import { useRouter } from 'next/navigation';

interface RegisterOrganizerArgs extends Omit<User, 'id'> {
  password: string;
}

const useRegisterOrganizer = () => {
  const router = useRouter();
  const registerOrganizer = async (payload: RegisterOrganizerArgs) => {
    try {
      await axiosInstance.post('/auth/register-organizer', 
      payload);
      router.push('/login');
    } catch (error) {
      console.log(error);
    }
  };

  return { registerOrganizer };
};

export default useRegisterOrganizer;
