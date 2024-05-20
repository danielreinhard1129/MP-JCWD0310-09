'use client';

import Dropzone from '@/components/Dropzone';
import FormInput from '@/components/FormInput';

import PreviewImages from '@/components/PreviewImages';
import RichTextEditor from '@/components/RichTextEditor';
import { Button } from '@/components/ui/button';
import useCreateEvent from '@/hooks/api/event/useCreateEvent';
import { useAppSelector } from '@/redux/hooks';
import { IFormCreateEvent } from '@/types/event.type';
import { useFormik } from 'formik';
import Image from 'next/image';
import React from 'react';
import { validationSchema } from './validationSchema';
import AuthGuard from '@/hoc/AuthGuard';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

const CreateEvent = () => {
  const { createEvent } = useCreateEvent();
  const { id } = useAppSelector((state) => state.user);
  const {
    handleSubmit,
    handleBlur,
    handleChange,
    setFieldValue,
    values,
    errors,
    touched,
  } = useFormik<IFormCreateEvent>({
    initialValues: {
      title: '',
      thumbnail: [],
      description: '',
      remainingTicket: '',
      location: '',
      price: '',
      startDate: '',
      endDate: '',
      // phone: '',
      // categoryName: '',
      category: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      createEvent({ ...values, userId: id });
    },
  });
  console.log(values);

  return (
    <>
      <div className="bg-[url('/bg.jpg')] w-full h-[screen] bg-cover mx-auto mr-5 relative text-whites">
        <h3 className="text-3xl text-center font-bold pt-3">
          Create Your Event
        </h3>
        <form onSubmit={handleSubmit} className="mx-auto flex justify-center">
          <div className="mx-5 px-2 max-w-5xl gap-4 border border-gray-700 my-2 py-5 rounded-md ">
            <div className="container grid grid-cols-2 justify-evenly gap-4">
              <div className="space-y-5">
                <FormInput
                  name="title"
                  error={errors.title}
                  isError={!!touched.title && !!errors.title}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  placeholder="Title"
                  type="text"
                  value={values.title}
                  label={'Title'}
                />
                <FormInput
                  name="category"
                  error={errors.category}
                  isError={!!touched.category && !!errors.category}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  placeholder="Category"
                  type="text"
                  value={values.category}
                  label="Category"
                />
                <FormInput
                  name="location"
                  error={errors.location}
                  isError={!!touched.location && !!errors.location}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  placeholder="Location"
                  type="text"
                  value={values.location}
                  label="Location"
                />

                {/* <Select>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value={''}>Travel</SelectItem>
                    <SelectItem value={''}>Festival</SelectItem>
                    <SelectItem value={''}>Sports</SelectItem>
                    <SelectItem value={''}>Night Life</SelectItem>
                  </SelectContent>
                </Select> */}

                {/* <div className="flex justify-start status">
                  <div className="flex mr-5">
                    <p className="my-auto mr-1">Free</p>
                    <FormInput
                      name="isFree"
                      error={errors.location}
                      isError={!!touched.location && !!errors.location}
                      onBlur={handleBlur}
                      onChange={handleChange}
                      placeholder="Status"
                      value={values.location}
                      label=""
                      type="radio"
                    />
                  </div>
                  <div className="flex">
                    <p className="my-auto mr-1">Paid</p>
                    <FormInput
                      name="isFree"
                      error={errors.location}
                      isError={!!touched.location && !!errors.location}
                      onBlur={handleBlur}
                      onChange={handleChange}
                      placeholder="Status"
                      value={values.location}
                      label=""
                      type="radio"
                    />
                  </div>
                </div> */}

                <FormInput
                  name="price"
                  error={errors.price}
                  isError={!!touched.price && !!errors.price}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  placeholder="Rp"
                  type="number"
                  value={values.price}
                  label="Price "
                />
              </div>
              <div className="space-y-5">
                <FormInput
                  name="startDate"
                  error={errors.startDate}
                  isError={!!touched.startDate && !!errors.startDate}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  placeholder="Start Event"
                  type="datetime-local"
                  value={values.startDate}
                  label="Start Event"
                />
                <FormInput
                  name="endDate"
                  error={errors.endDate}
                  isError={!!touched.endDate && !!errors.endDate}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  placeholder="End Event"
                  type="datetime-local"
                  value={values.endDate}
                  label="End Event"
                />
                <FormInput
                  name="remainingTicket"
                  error={errors.remainingTicket}
                  isError={
                    !!touched.remainingTicket && !!errors.remainingTicket
                  }
                  onBlur={handleBlur}
                  onChange={handleChange}
                  placeholder="Ticket Limit"
                  value={values.remainingTicket}
                  label="Ticket Limit"
                  type="number"
                />
              </div>
            </div>

            <PreviewImages
              fileImages={values.thumbnail}
              onRemoveImage={(idx: number) =>
                setFieldValue('thumbnail', values.thumbnail.toSpliced(idx, 1))
              }
            />
            <div>
              <Dropzone
                isError={Boolean(errors.thumbnail)}
                label="Picture"
                onDrop={(files) =>
                  setFieldValue('thumbnail', [
                    ...values.thumbnail,
                    ...files.map((file) => file),
                  ])
                }
              />
              <RichTextEditor
                onChange={(html: string) => setFieldValue('description', html)}
                label="Description"
                value={values.description}
                isError={Boolean(errors.description)}
              />
              <div className="mb-4 flex justify-end">
                <Button
                  type="submit"
                  className="bg-brown-shades rounded-sm p-2 hover:bg-brown-tints"
                >
                  Submit
                </Button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default AuthGuard(CreateEvent);
