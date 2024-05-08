import Image from 'next/image';
import React from 'react';
import { Input } from '../../components/ui/input';
import { Button } from '../../components/ui/button';

const Footer = () => {
  return (
    <>
      <div className="bg-[url('/nodepad.png')] bg-cover w-full md:h-[400px] text-white">
        <div className="grid md:grid-cols-3 grid-cols-1">
          {/* About  */}
          <div className="md:ml-10 md:mr-5 ml-2">
            <Image
              className="w-[150px] h-[150px]"
              src="/eventWarr.svg"
              alt="logo.jpg"
              width={150}
              height={150}
            ></Image>
            <h1 className="md:text-md ">
              EventWarr is a web platform that provides various types of tickets
              at very affordable prices
            </h1>
          </div>

          {/* Newsletter */}
          <div className="md:mt-24 mt-5 p-2">
            <h1 className="text-xl mb-5">NEWSLETTER</h1>
            <h3 className="text-md">Dont miss a thing</h3>
            <h3 className="text-md">Sign up to receive newest tickets</h3>

            <Input
              type="Email"
              className="mt-5 text-center"
              placeholder="Your Email Address"
            />
            <Button className="w-full mt-5 bg-brown-shades hover:bg-brown-tints">
              Sign Up
            </Button>
          </div>

          {/* Contact */}
          <div className="md:ml-10 md:mt-24 ml-2 mt-2 p-2">
            <h1 className="text-xl ">Contact</h1>
            <div className="flex justify-start my-3 gap-2">
              <Image
                className="h-1/2"
                src="/location-white.png"
                alt="location.jpg"
                width={20}
                height={20}
              ></Image>{' '}
              <p className="text-sm">
                Pacific Building, Jl. Laksda Adisucipto No.157 lt. 4, Demangan
                Baru, Caturtunggal, Kec. Depok, Kabupaten Sleman, Daerah
                Istimewa Yogyakarta 55281
              </p>
            </div>

            <div className="flex justify-start my-3 gap-2">
              <Image
                className="h-1/2"
                src="/email.png"
                alt="email.jpg"
                width={20}
                height={20}
              ></Image>{' '}
              <p className="text-sm">eventwarr@gmail.com</p>
            </div>

            <div className="flex justify-start gap-2">
              <Image
                className="h-1/2"
                src="/phone.png"
                alt="phone.png"
                width={20}
                height={20}
              ></Image>{' '}
              <p className="text-sm">+62 82297644522</p>
            </div>
          </div>
        </div>

        <div className="flex justify-end mt-10 border-t w-full">
          <p className="mx-auto mt-1">
            Copyright &#169; 2024 EventWarr - All rights reserved
          </p>{' '}
        </div>
      </div>
    </>
  );
};

export default Footer;
