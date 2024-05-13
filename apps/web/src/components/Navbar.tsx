'use client';

import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { useRouter } from 'next/navigation';

const Navbar = () => {
  const router = useRouter();
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const [navbar, setNavbar] = useState(true);

  const changeBackground = () => {
    // console.log(window.scrollY);
    if (window.scrollY >= 279) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  window.addEventListener('scroll', changeBackground);
  return (
    <>
      <nav
        className={
          navbar
            ? 'sticky top-0 z-50 bg-woodsmokey bg-opacity-90 backdrop-blur-sm text-white'
            : 'sticky top-0 z-50 bg-woodsmokey text-white  '
        }
      >
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
                <Badge
                  className="bg-brown-shades rounded-e-full p-2 hover:bg-brown-tints cursor-pointer"
                  onClick={() => router.push('/register')}
                >
                  <h5>Register</h5>
                </Badge>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
