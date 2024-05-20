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
import AutoComplete from '@/components/AutoComplete';

export const LandingPage = () => {
  return (
    <>
      <div className="bg-[url('/camera1.jpg')] w-full h-[calc(100vh-6rem)] bg-cover mx-auto mr-5 relative">
        <nav className=" text-white font-bold relative">
          <div className="mx-auto px-4">
            <div className="flex items-center md:justify-around justify-between">
              <div className="h-24 w-100"></div>
            </div>
          </div>
        </nav>

        <div className="mx-auto md:w-[500px] w-full h-32  md:mt-44  mt-14 text-white">
          <h1 className="md:text-4xl text-2xl font-extrabold mb-2 md:ml-0 ml-12">
            Bringing Moments To Life
          </h1>
          <h1 className="md:text-4xl text-2xl font-extrabold md:ml-0 ml-12 ">
            Your Event, Our Expertise
          </h1>
        </div>

        <div>
          <h3 className="font-semibold text-white">
            <AutoComplete />
          </h3>
        </div>
      </div>
    </>
  );
};
