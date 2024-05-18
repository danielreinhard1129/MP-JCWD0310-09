'use client';
import FormInput from '@/components/FormInput';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useFormik } from 'formik';
import React from 'react';
import { validationSchema } from './validationSchema';
import useRegister from '@/hooks/api/auth/useRegister';
import Navbar from '@/components/Navbar';
import { useRouter } from 'next/navigation';

const Register: React.FC = () => {
  const router = useRouter();
  const { register } = useRegister();
  const { values, errors, touched, handleChange, handleBlur, handleSubmit } =
    useFormik({
      initialValues: {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        referralCode: '',
      },
      validationSchema,
      onSubmit: (values) => {
        register(values);
      },
    });

  return (
    <>
      <main className="container mx-auto my-10 px-4">
        <div className="flex justify-center">
          <Card className="w-[450px]">
            <CardHeader>
              <CardTitle className="text-center text-3xl text-primary">
                Sign Up Event War
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit}>
                <div className="grid w-full items-center gap-4">
                  {/* FIRST NAME */}
                  <FormInput
                    name="firstName"
                    error={errors.firstName}
                    isError={!!touched.firstName && !!errors.firstName}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    placeholder="First Name"
                    type="text"
                    value={values.firstName}
                    label={'First Name'}
                  />
                  {/* FIRST NAME END */}

                  {/* LAST NAME */}
                  <FormInput
                    name="lastName"
                    error={errors.lastName}
                    isError={!!touched.lastName && !!errors.lastName}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    placeholder="Last Name"
                    type="name"
                    value={values.lastName}
                    label={'Last Name'}
                  />
                  {/* LAST NAME END */}

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

                  {/* REFERRAL */}
                  <FormInput
                    name="referralCode"
                    error={errors.referralCode}
                    isError={!!touched.referralCode && !!errors.referralCode}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    placeholder="Referral Code"
                    type="text"
                    value={values.referralCode}
                    label={'Referral Code'}
                  />
                  {/* REFERRAL END */}
                </div>
                <Button className="mt-6 w-full bg-slate-800 text-white"
                onClick={() => router.push('/login')}
                >
                  Register
                </Button>
                <p
                  className="cursor-pointer text-end text-xs mt-4"
                  onClick={() => router.push('/organizer/register')}
                >
                  Register as Organizer
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </main>
    </>
  );
};

export default Register;
