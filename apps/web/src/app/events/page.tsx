'use client';
import Navbar from '@/components/Navbar';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Input } from '@/components/ui/input';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { cn } from '@/lib/utils';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@radix-ui/react-dropdown-menu';
import { CalendarIcon } from '@radix-ui/react-icons';
import { format, setDate } from 'date-fns';
import Image from 'next/image';
import Link from 'next/link';
import React, { FC, useState } from 'react';
import { LuMapPin } from 'react-icons/lu';
import { MdOutlinePendingActions } from 'react-icons/md';
import { FaMoneyCheckAlt } from 'react-icons/fa';
import Cards from './components/Cards';
import useGetEvent from '@/hooks/api/event/useGetEvent';
import { notFound, useRouter } from 'next/navigation';

import { appConfig } from '@/utils/config';

import LocationAutoComplete from '@/components/AutoComplete';
import Pagination from '@/components/pagination';
import EventCard from '@/components/EventCard';
import useGetEvents from '@/hooks/api/event/useGetEvents';
import AutoComplete from '@/components/AutoComplete';
import CategoryCard from '@/components/CategoryCard';

const Events = ({ params }: { params: { id: string } }) => {
  const [date, setDate] = React.useState<Date>();
  const { event } = useGetEvent(Number(params.id));
  const [page, setPage] = useState<number>(1);
  const { data: events, meta } = useGetEvents({
    page,
    take: 3,
  });
  const handleChangePaginate = ({ selected }: { selected: number }) => {
    setPage(selected + 1);
  };
  const uniqueCategories = new Set();
  const filteredEvents = events.filter((event) => {
    if (uniqueCategories.has(event.category)) {
      return false;
    } else {
      uniqueCategories.add(event.category);
      return true;
    }
  });

  // if (!event) {
  //   return notFound();
  // }

  return (
    <>
      <div className="bg-[url('/bg-events.jpg')] bg-cover w-full h-[300px] text-white">
        {/* Title */}
        <div className="my-auto ">{/* <TitleAutoComplete /> */}</div>
        <div className="mx-auto flex justify-center">
          <h3 className="text-whites text-3xl font-semibold relative top-24 left-5">
            EVENTWARR{' '}
            <span className="text-black font-semibold text-3xl">LIST</span>
          </h3>
        </div>

        {/* Category */}
        <div className=" my-auto ">{/* <CategoryAutoComplete /> */}</div>

        {/* Location */}
        <div className="my-auto">{/* <AutoComplete /> */}</div>
      </div>

      {/* Category Title */}
      <section>
        <div className="container flex mb-10 justify-center mx-auto mt-10 gap-10">
          {filteredEvents.map((event, index) => {
            return <CategoryCard key={index} category={event.category} />;
          })}
        </div>
      </section>

      <div className="container grid grid-cols-3 mb-10 gap-5"></div>

      {/* Cards */}
      <div>
        <section className="grid grid-cols-3 gap-4">
          {events.map((event, index) => {
            return (
              <EventCard
                key={index}
                title={event.title}
                // author={event.user}
                category={event.category}
                createdAt={new Date(event.createdAt)}
                description={event.description}
                imageUrl={appConfig.baseUrl + `/assets${event.thumbnail}`}
                eventId={event.id}
                location={event.location}
              />
            );
          })}
        </section>

        <div className="my-8 flex justify-center">
          <Pagination
            total={meta?.total || 0}
            take={meta?.take || 0}
            onChangePage={handleChangePaginate}
          />
        </div>
      </div>
    </>
  );
};

export default Events;
