'use client';

import { axiosInstance } from '@/lib/axios';
import { IFormCreateEvent } from '@/types/event.type';
import { AxiosError } from 'axios';
import { useRouter } from 'next/navigation';
import React from 'react';
import { FileWithPath } from 'react-dropzone';

const useCreateEvent = () => {
  const router = useRouter();
  const createBlog = async (payload: IFormCreateEvent) => {
    try {
      const {
        title,
        category,
        content,
        startDate,
        endDate,
        description,
        location,
        price,
        thumbnail,
        userId,
      } = payload;
      const createEventForm = new FormData();

      createEventForm.append('title', title);
      createEventForm.append('category', category);
      createEventForm.append('content', content);
      createEventForm.append('startDate', startDate);
      createEventForm.append('endDate', endDate);
      createEventForm.append('description', description);
      createEventForm.append('location', location);
      createEventForm.append('price', price);
      createEventForm.append('userId', String(userId));

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
  return { createBlog };
};

export default useCreateEvent;
