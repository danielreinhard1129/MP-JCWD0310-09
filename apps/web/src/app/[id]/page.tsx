'use client';

import Markdown from '@/components/MarkDown';
import { Button } from '@/components/ui/button';
import useGetEvent from '@/hooks/api/event/useGetEvent';
import { appConfig } from '@/utils/config';
import { format } from 'date-fns';

import {
  Banknote,
  Building2,
  CalendarDays,
  Mail,
  MapPin,
  Phone,
  Share2,
  Ticket,
} from 'lucide-react';
import Image from 'next/image';
import React from 'react';
import Header from './components/header';
import { notFound } from 'next/navigation';

const EventDetail = ({ params }: { params: { id: string } }) => {
  const { event } = useGetEvent(Number(params.id));

  console.log(params);

  if (!event) {
    return <div className="container mx-auto px-4">Event not found</div>;
  }
  console.log(event);
  if (!event) {
    return notFound();
  }

  return (
    <>
      <Header />
      <div className="container mx-auto px-4 grid grid-cols-3 mb-10">
        <div className="col-span-2">
          <div className="mt-5">
            <h1 className="text-2xl font-semibold">{event.title}</h1>
            <div className="flex mb-2 items-center justify-between">
              <p className="text-base font-light italic">
                {' '}
                {format(new Date(event.createdAt), 'dd MMMM yyyy')}
              </p>
              <Button>
                <Share2 size="20px" />
              </Button>
            </div>
            <div className="relative h-[400px]">
              <Image
                fill
                src={`${appConfig.baseUrl}/assets${event.thumbnail}`}
                alt="thumbnail image"
                className="object-cover bg-slate-200 rounded-md"
              />
            </div>
          </div>

          <section>
            <Markdown description={event.description} />
          </section>
        </div>

        <div className=" mt-24 ml-5  space-y-5 w-3/4">
          <h3 className="font-bold text-base border-b-2 text-brown-shades">
            Event Details
          </h3>
          <p className="font-medium text-sm text-gray-700 ">Organizer Name</p>
          <div className="flex">
            <Building2 color="grey" size={20} />
            <p className="text-xs font-light my-auto ml-1 ">{}</p>
          </div>
          <p className="font-medium text-sm text-gray-700">Start Event</p>
          <div className="flex">
            <CalendarDays color="grey" size={20} />
            <p className="text-xs font-light my-auto ml-1 ">
              {' '}
              {format(new Date(event.startDate), 'dd MMMM yyyy')}
            </p>
          </div>
          <p className="font-medium text-sm text-gray-700 ">End Event</p>
          <div className="flex">
            <CalendarDays color="grey" size={20} />
            <p className="text-xs font-light my-auto ml-1 ">
              {' '}
              {format(new Date(event.endDate), 'dd MMMM yyyy')}
            </p>
          </div>
          <p className="font-medium text-sm text-gray-700">Location</p>
          <div className="flex">
            <MapPin color="grey" size={20} />
            <p className="text-xs font-light my-auto ml-1">{event.location}</p>
          </div>
          <h3 className="font-medium text-sm text-gray-700">Price</h3>
          <div className="flex">
            <Banknote color="grey" size={20} />
            <p className="text-xs font-light my-auto ml-1">{event.price}</p>
          </div>
          <h3 className="font-medium text-sm text-gray-700">Phone</h3>
          <div className="flex">
            <Phone color="grey" size={20} />
            <p className="text-xs font-light my-auto ml-1">{}</p>
          </div>
          <h3 className="font-medium text-sm text-gray-700">Email</h3>
          <div className="flex">
            <Mail color="grey" size={20} />
            <p className="text-xs font-light my-auto ml-1">{}</p>
          </div>
          <h3 className="font-light text-sm text-gray-800">
            Remanining Tickets
          </h3>
          <div className="flex">
            <Ticket color="grey" size={20} />
            <p className="text-xs font-light my-auto ml-1">
              {event.remainingTicket}
            </p>
          </div>
          <div className="w-full mx-auto text-center font-medium">
            <Button className="text-center  bg-brown-shades w-full text-whites hover:bg-brown-tints ">
              Get Ticket
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default EventDetail;
