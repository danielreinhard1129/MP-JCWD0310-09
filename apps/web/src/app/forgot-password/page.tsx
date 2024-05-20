'use client';

import React from 'react'
import FormInput from '@/components/FormInput';
import { Button } from '@/components/ui/button';
import { Loader2 } from "lucide-react";
import { useFormik } from 'formik';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import useForgotPassword from '@/hooks/api/auth/useForgotPassword';


const ForgotPassword = () => {
    const { forgotPassword, isLoading } = useForgotPassword();
    const { values, errors, touched, handleChange, handleBlur,  handleSubmit} = 
    useFormik({
        initialValues: {
          email: '',
        },
        // validationSchema,
        onSubmit: ({ email }) => {
            forgotPassword(email);
        },
      });
  return (
    <main className="container mx-auto my-10 px-4">
      <div className="flex justify-center h-screen">
        <Card className="mt-10 w-[450px] h-[250px]">
          <CardHeader>
            <CardTitle className="text-center text-3xl text-primary text-[#B66772]">
              Forgot Password
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit}>
              <div className="grid w-full items-center gap-4">
                {/* EMAIL */}
                <FormInput
                                  name="email"
                                  error={errors.email}
                                  isError={!!touched.email && !!errors.email}
                                  onBlur={handleBlur}
                                  onChange={handleChange}
                                  placeholder="Email"
                                  type="email"
                                  value={values.email} 
                                  label={'Email'}                
                />
                {/* EMAIL END */}
              </div>
            <Button className="mt-6 w-full bg-[#B66772] text-white" disabled={isLoading}>
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

export default ForgotPassword;