import { Button } from '@/components/ui/button';
import Image from 'next/image';
import React, { FC } from 'react';
import { LuMapPin } from 'react-icons/lu';
import { MdOutlinePendingActions } from 'react-icons/md';
import { FaMoneyCheckAlt } from 'react-icons/fa';
import { CalendarIcon } from '@radix-ui/react-icons';
import { Badge } from '@/components/ui/badge';
import { format } from 'date-fns';

interface CardsProps {
  title: string;
  startDate: Date;
  endDate: Date;
  location: string;
  thumbnail: string;
  description: string;
  price: number;
  availableTicket: number;
  category: string;
}
const Cards: FC<CardsProps> = ({
  title,
  availableTicket,
  category,
  description,
  endDate,
  location,
  price,
  startDate,
  thumbnail,
}) => {
  const formatPrice = (price: number): string => {
    return price === 0
      ? 'Free Event'
      : new Intl.NumberFormat('id-ID', {
          style: 'currency',
          currency: 'IDR',
          minimumFractionDigits: 0,
        }).format(price);
  };
  return (
    <div className="mx-auto mt-5">
      <div className=" mx-auto relative w-[500px] h-[400px]">
        <Image
          className="mx-auto rounded-md"
          src={''}
          alt="columbus.jpg"
          width={400}
          height={300}
        ></Image>
        <div className="w-3/4 mx-auto absolute bottom-0 left-16 rounded-md bg-whites border-t-2 border-t-brown-shades border-b-2 border-b-brown-shades">
          <h3 className="mx-auto text-center text-xl font-bold py-1 hover:text-brown-shades cursor-pointer">
            {title}
          </h3>
          <div className="flex justify-around ">
            <div>
              <Button className="bg-brown-tints">{category}</Button>
            </div>
            <div className="my-auto">
              <p className="mx-auto my-auto text-sm flex gap-2">
                <CalendarIcon className="mx-auto my-auto" />{' '}
                {format(startDate, 'dd MMMM yyyy')} -{' '}
                {format(endDate, 'dd MMMM yyyy')}
              </p>
            </div>
          </div>

          <p className="p-1 text-sm h-32">{}</p>
          <div className="flex justify-around">
            <div className="my-auto">
              <Badge className="bg-whites">
                Available Ticket: {availableTicket}
              </Badge>
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
              <p className="text-xs my-auto">{location}</p>
            </div>
            <div className="flex gap-1">
              <FaMoneyCheckAlt className="my-auto" />{' '}
              <p className="text-xs my-auto">{formatPrice(price)}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
