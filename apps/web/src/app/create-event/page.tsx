'use client';

import Dropzone from '@/components/Dropzone';
import FormInput from '@/components/FormInput';
import FormTextArea from '@/components/FormTextArea';
import PreviewImages from '@/components/PreviewImages';
import RichTextEditor from '@/components/RichTextEditor';
import { Button } from '@/components/ui/button';
import useCreateEvent from '@/hooks/api/event/useCreateEvent';
import { useAppSelector } from '@/redux/hooks';
import { IFormCreateEvent } from '@/types/event.type';
import { useFormik } from 'formik';
import React from 'react';

const CreateEvent = () => {
  const { createBlog } = useCreateEvent();
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
      category: '',
      thumbnail: [],
      description: '',
      content: '',
      location: '',
      price: '',
      startDate: '',
      endDate: '',
    },
    onSubmit: (values) => {
      createBlog({ ...values, userId: id });
    },
  });
  console.log(values.content);

  return (
    <div className="container mx-auto px-4">
      <form onSubmit={handleSubmit}>
        <div className="mx-auto flex max-w-5xl flex-col gap-4">
          <FormInput
            name="title"
            error={errors.title}
            isError={!!touched.title && !!errors.title}
            handleBlur={handleBlur}
            handleChange={handleChange}
            placeholder="Title"
            type="title"
            value={values.title}
            label="Title"
          />
          <FormInput
            name="category"
            error={errors.category}
            isError={!!touched.category && !!errors.category}
            handleBlur={handleBlur}
            handleChange={handleChange}
            placeholder="Category"
            type="text"
            value={values.category}
            label="Category"
          />
          <FormInput
            name="location"
            error={errors.location}
            isError={!!touched.location && !!errors.location}
            handleBlur={handleBlur}
            handleChange={handleChange}
            placeholder="Location"
            type="text"
            value={values.location}
            label="Location"
          />
          <FormInput
            name="price"
            error={errors.price}
            isError={!!touched.price && !!errors.price}
            handleBlur={handleBlur}
            handleChange={handleChange}
            placeholder="Price"
            type="text"
            value={values.price}
            label="Price"
          />
          <FormInput
            name="startDate"
            error={errors.startDate}
            isError={!!touched.startDate && !!errors.startDate}
            handleBlur={handleBlur}
            handleChange={handleChange}
            placeholder="Start Date"
            type="text"
            value={values.startDate}
            label="Start Date"
          />
          <FormInput
            name="endDate"
            error={errors.endDate}
            isError={!!touched.endDate && !!errors.endDate}
            handleBlur={handleBlur}
            handleChange={handleChange}
            placeholder="End date"
            type="text"
            value={values.endDate}
            label="End Date"
          />
          <FormTextArea
            name="description"
            error={errors.description}
            isError={!!touched.description && !!errors.description}
            handleBlur={handleBlur}
            handleChange={handleChange}
            placeholder="Description"
            value={values.description}
            label="Description"
          />

          <PreviewImages
            fileImages={values.thumbnail}
            onRemoveImage={(idx: number) =>
              setFieldValue('thumbnail', values.thumbnail.toSpliced(idx, 1))
            }
          />

          <Dropzone
            isError={Boolean(errors.thumbnail)}
            label="Thumbnail"
            onDrop={(files) =>
              setFieldValue('thumbnail', [
                ...values.thumbnail,
                ...files.map((file) => file),
              ])
            }
          />
          <RichTextEditor
            onChange={(html: string) => setFieldValue('content', html)}
            label="Content"
            value={values.content}
            isError={Boolean(errors.content)}
          />
        </div>

        <div className="mb-4 flex justify-end">
          <Button type="submit">Submit</Button>
        </div>
      </form>
    </div>
  );
};

export default CreateEvent;
