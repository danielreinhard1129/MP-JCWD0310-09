'use client';

import EventCard from '@/components/EventCard';
import Pagination from '@/components/pagination';
import {
  Carousel,
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

import useGetEvents from '@/hooks/api/event/useGetEvents';
import { appConfig } from '@/utils/config';

import React, { useState } from 'react';

export default function NewestEvents() {
  const [page, setPage] = useState<number>(1);
  const { data: events, meta } = useGetEvents({
    page,
  });

  // const handleChangePaginate = ({ selected }: { selected: number }) => {
  //   setPage(selected + 1);
  // };
  return (
    <>
      <div className="md:mt-32 mt-10 mx-auto text-center">
        {/* TITLE NEWEST EVENTS */}
        <div className="mb-7">
          <h1 className="md:text-4xl text-3xl font-bold ">
            <span className="border-b-4 border-blue-800">Newest </span>
            <span className="text-brown-shades border-b-4 border-brown-tints">
              Events
            </span>
          </h1>
        </div>
        {/* END TITLE NEWEST EVENTS */}
      </div>

      {/* Cards */}
      <div>
        <section className="flex">
          <Carousel
            opts={{ align: 'start' }}
            className="w-full md:p-20 p-14 container mx-auto"
          >
            <CarouselContent className="gap-10 px-1 py-2">
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
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </section>

        {/* 
        <div className="my-8 flex justify-center">
          <Pagination
            total={meta?.total || 0}
            take={meta?.take || 0}
            onChangePage={handleChangePaginate}
          />
        </div> */}
      </div>
    </>
  );
}
