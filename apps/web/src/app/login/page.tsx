'use client';

import FormInput from '@/components/FormInput';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useFormik } from 'formik';

import React from 'react';
import { validationSchema } from './validationSchema';
import useLogin from '@/hooks/api/auth/useLogin';
import { useRouter } from 'next/navigation';
import AuthGuardUser from '@/hoc/CustomerGuard';

const Login = () => {
  const router = useRouter();
  const { login } = useLogin();
  const { values, errors, touched, handleChange, handleBlur, handleSubmit } =
    useFormik({
      initialValues: {
        email: '',
        password: '',
      },
      validationSchema,
      onSubmit: (values) => {
        try {
          login(values);
        } catch (error) {
          console.log(error);
          
        }
      },
    });
  return (
    <main className="container mx-auto my-10 px-4">
      <div className="flex justify-center">
        <Card className="w-[450px]">
          <CardHeader>
            <CardTitle className="text-center text-3xl text-primary">
              Login Event War
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

                {/* PASSWORD */}
                <FormInput
                  name="password"
                  error={errors.password}
                  isError={!!touched.password && !!errors.password}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  placeholder="Password"
                  type="password"
                  value={values.password}
                  label={'Password'}
                />
                {/* PASSWORD END */}
                <p
                  className="cursor-pointer text-end text-xs"
                  onClick={() => router.push('/')}
                >
                  Forgot Password?
                </p>
              </div>
              <Button className="mt-6 w-full bg-slate-800 text-white">
                Login
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </main>
  );
};

export default Login;
