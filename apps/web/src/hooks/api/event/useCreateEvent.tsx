'use client';

import { axiosInstance } from '@/lib/axios';
import { Event, IFormCreateEvent } from '@/types/event.type';
import { AxiosError } from 'axios';
import { useRouter } from 'next/navigation';
import { FileWithPath } from 'react-dropzone';

const useCreateEvent = () => {
  const router = useRouter();
  const createEvent = async (payload: IFormCreateEvent) => {
    try {
      const {
        title,
        startDate,
        endDate,
        description,
        location,
        price,
        thumbnail,
        userId,
        remainingTicket,
        // categoryName,
        category,
      } = payload;
      const createEventForm = new FormData();

      createEventForm.append('title', title);
      createEventForm.append('startDate', startDate);
      createEventForm.append('endDate', endDate);
      createEventForm.append('description', description);
      createEventForm.append('location', location);
      createEventForm.append('price', price);
      createEventForm.append('userId', String(userId));
      createEventForm.append('remainingTicket', String(remainingTicket));
      // createEventForm.append('categoryName', categoryName);
      createEventForm.append('category', category);

      // createEventForm.append('phone', phone);

      thumbnail.forEach((file: FileWithPath) => {
        createEventForm.append('thumbnail', file);
      });
      await axiosInstance.post<Event>('/events', createEventForm);
      //toast success here
      router.push('/');
    } catch (error) {
      if (error instanceof AxiosError) {
        // console.log with toast
        console.log(error);
      }
    }
  };
  return { createEvent };
};

export default useCreateEvent;
