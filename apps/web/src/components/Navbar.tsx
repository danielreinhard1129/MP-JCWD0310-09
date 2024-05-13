'use client';

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { useRouter } from 'next/navigation';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { logoutAction } from '@/redux/slice/userSlice';

const Navbar = () => {
  const dispatch = useAppDispatch();
  const { id } = useAppSelector((state) => state.user);
  const router = useRouter();

  const logout = () => {
    localStorage.removeItem('token');
    dispatch(logoutAction());
  }
  return (
    <>
      <nav className=" text-whites bg-woodsmokey ">
        <div className="mx-auto px-4">
          <div className="flex items-center justify-between">
            <div className="h-24 w-56">
              <Link href={'/home'}>
                <Image
                  src="/eventWarr.svg"
                  alt="logo.svg"
                  width={130}
                  height={120}
                  quality={100}
                  className="relative bottom-4"
                ></Image>
              </Link>
            </div>

            {Boolean(id) ? (
            <div className="flex items-center gap-8 ml-5">
              <Link href={'/events'}>
                <h3 className="events">Events</h3>
              </Link>
              <Link href={'/venues'}>
                <h3 className="venue">Venues</h3>
              </Link>
              <Link href={'/about'}>
                <h3 className="about">About</h3>
              </Link>
              <Link href={'/contact'}>
                <h3 className="contact">Contact</h3>
              </Link>
              <div>
                <Badge className="bg-brown-shades rounded-s-full p-2 hover:bg-brown-tints"
                  onClick={logout}
                >
                  <Link href={'/login'}>Logout</Link>
                </Badge>
                <Badge className="bg-brown-shades rounded-e-full p-2 hover:bg-brown-tints" 
                  onClick={() => router.push('/register')}>
                  <h5>Register</h5>
                </Badge>
              </div>
            </div>
            ) : (
              <div className="flex items-center gap-8 ml-5">
              <Link href={'/events'}>
                <h3 className="events">Events</h3>
              </Link>
              <Link href={'/venues'}>
                <h3 className="venue">Venues</h3>
              </Link>
              <Link href={'/about'}>
                <h3 className="about">About</h3>
              </Link>
              <Link href={'/contact'}>
                <h3 className="contact">Contact</h3>
              </Link>
              <div>
                <Badge className="bg-brown-shades rounded-s-full p-2 hover:bg-brown-tints">
                  <Link href={'/login'}>Log In</Link>
                </Badge>
                <Badge className="bg-brown-shades rounded-e-full p-2 hover:bg-brown-tints" onClick={() => router.push('/register')}>
                  <h5>Register</h5>
                </Badge>
              </div>
            </div>
            )}
            
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
