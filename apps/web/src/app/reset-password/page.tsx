'use client';

import React from 'react'
import FormInput from '@/components/FormInput';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useFormik } from 'formik';
import { validationSchema } from "./validateSchema"
import { notFound, useSearchParams } from 'next/navigation';
import useResetPassword from '@/hooks/api/auth/useResetPassword';
import { Loader2 } from 'lucide-react';

const ResetPassword = () => {
    const searchParams = useSearchParams();
    const token = searchParams.get('token');

    if (!token) {
      notFound();
    }

    const { resetPassword, isLoading } = useResetPassword();
    const { values, errors, touched, handleChange, handleBlur,  handleSubmit} = 
    useFormik({
        initialValues: {
          password: '',
          confirmPassword: '',
        },
        validationSchema,
        onSubmit: ({ password }) => {
          resetPassword(password, token)
        },
      });
  return (
    <main className="container mx-auto my-10 px-4">
      <div className="flex justify-center">
        <Card className="w-[450px]">
          <CardHeader>
            <CardTitle className="text-center text-3xl text-primary">
              Reset Password
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit}>
              <div className="grid w-full items-center gap-4">
                {/* PASSWORD */}
                <FormInput
                                  name="password"
                                  error={errors.password}
                                  isError={!!touched.password && !!errors.password}
                                  handleBlur={handleBlur}
                                  handleChange={handleChange}
                                  placeholder="Password"
                                  type="password"
                                  value={values.password} 
                                  label={'Password'}                
                />
                {/* PASSWORD END */}

                {/* CONFIRM PASSWORD */}
                <FormInput
                                  name="confirmPassword"
                                  error={errors.confirmPassword}
                                  isError={!!touched.confirmPassword && !!errors.confirmPassword}
                                  handleBlur={handleBlur}
                                  handleChange={handleChange}
                                  placeholder="Confirm Password"
                                  type="password"
                                  value={values.confirmPassword} 
                                  label={'Confirm Password'}                
                />
                {/* CONFIRM PASSWORD END */}
              </div>
              <Button className="mt-6 w-full bg-slate-800 text-white" disabled={isLoading} type='submit'>
                { isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" /> }
                { isLoading ? 'Loading' : 'Submit' }
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </main>
  )
}

export default ResetPassword;