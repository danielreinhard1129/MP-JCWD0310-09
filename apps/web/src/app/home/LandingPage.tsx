'use client';

import Image from 'next/image';
import * as React from 'react';
import { Button } from '../../components/ui/button';
import { Badge } from '../../components/ui/badge';
import Link from 'next/link';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '../../components/ui/card';

export const LandingPage = () => {
  return (
    <>
      <div className="bg-[url('/camera1.jpg')] w-full h-[screen] bg-cover mx-auto mr-5 relative">
        <nav className=" text-white font-bold relative">
          <div className="mx-auto px-4">
            <div className="flex items-center md:justify-around justify-between">
              <div className="h-24 w-100"></div>
            </div>
          </div>
        </nav>

        <div className="mx-auto md:w-[500px] w-full h-32  mt-44 text-white">
          <h1 className="md:text-4xl text-2xl font-extrabold mb-2 md:ml-0 ml-12">
            Bringing Moments To Life
          </h1>
          <h1 className="md:text-4xl text-2xl font-extrabold md:ml-0 ml-12 ">
            Your Event, Our Expertise
          </h1>
        </div>

        <div>
          <Link href={'/events'}>
            <Button className="bg-brown-shades mx-auto flex justify-center outline hover:bg-brown-tints hover:text-white">
              <h3 className="font-semibold text-white">Explore Your Events</h3>
            </Button>
          </Link>
        </div>

        <div className="container mx-auto w-[screen] h-32 mt-28 grid grid-cols-4  text-white">
          <div className=" bg-blackless  text-white">
            <Image
              className="mx-auto w-20 h-20 "
              src="/sports.gif"
              alt="sports.jpg"
              height={100}
              width={100}
            ></Image>

            <div className="mx-auto font-bold text-center">Sports</div>
          </div>

          <div className=" bg-blackless ">
            <Image
              className="mx-auto w-20 h-20"
              src="/travel.gif"
              alt="travel.jpg"
              height={100}
              width={100}
            ></Image>

            <div className="mx-auto font-bold text-center">Travel</div>
          </div>

          <div className=" bg-blackless ">
            <Image
              className="mx-auto w-20 h-20"
              src="/party.gif"
              alt="party.jpg"
              height={135}
              width={135}
            ></Image>

            <div className="mx-auto font-bold text-center">Festival</div>
          </div>

          <div className=" bg-blackless">
            <Image
              className="mx-auto w-20 h-20"
              src="/nightlife.gif"
              alt="nightlife.jpg"
              height={100}
              width={100}
            ></Image>

            <div className="mx-auto font-bold text-center">NightLife</div>
          </div>
        </div>
      </div>
    </>
  );
};
