import { Button } from '@/components/ui/button';
import Image from 'next/image';
import React from 'react';
import { LuMapPin } from 'react-icons/lu';
import { MdOutlinePendingActions } from 'react-icons/md';
import { FaMoneyCheckAlt } from 'react-icons/fa';
import { CalendarIcon } from '@radix-ui/react-icons';
import { Badge } from '@/components/ui/badge';

const Cards = () => {
  return (
    <div className="mx-auto mt-5">
      <div className=" mx-auto relative w-[500px] h-[400px]">
        <Image
          className="mx-auto rounded-md"
          src="/columbus.jpg"
          alt="columbus.jpg"
          width={400}
          height={300}
        ></Image>
        <div className="w-3/4 mx-auto absolute bottom-0 left-16 rounded-md bg-whites border-t-2 border-t-brown-shades border-b-2 border-b-brown-shades">
          <h3 className="mx-auto text-center text-xl font-bold py-1 hover:text-brown-shades cursor-pointer">
            Concert At Los Angles
          </h3>
          <div className="flex justify-around ">
            <div>
              <Button className="bg-brown-tints">Travel</Button>
            </div>
            <div className="my-auto">
              <p className="mx-auto my-auto text-sm flex gap-2">
                <CalendarIcon className="mx-auto my-auto" /> May 20, 2024
              </p>
            </div>
          </div>

          <p className="p-1 text-sm h-32">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse ipsam
            saepe animi eos cum. Veniam accusantium dolorem, explicabo neque
            fuga eveniet ea harum, facere dolores quisquam ad, error sit
            tempore?
          </p>
          <div className="flex justify-around">
            <div className="my-auto">
              <Badge className="bg-whites">Available Ticket: 25</Badge>
            </div>
            <div>
              <Button className="bg-brown-tints hover:bg-brown-shades hover:text-white">
                Buy
              </Button>
            </div>
          </div>
          <div className="flex justify-around">
            <div className="flex gap-1 p-1">
              <MdOutlinePendingActions className="my-auto" />{' '}
              <p className="text-xs">Showing</p>
            </div>
            <div className="flex gap-1 mr-1">
              <LuMapPin className="my-auto" />{' '}
              <p className="text-xs my-auto">Los Angles</p>
            </div>
            <div className="flex gap-1">
              <FaMoneyCheckAlt className="my-auto" />{' '}
              <p className="text-xs my-auto">Rp.40000</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
