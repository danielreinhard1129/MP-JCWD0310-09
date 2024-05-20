'use client';

import EventCard from '@/components/EventCard';
import LeftSection from '@/components/LeftSection';
import useGetEventsByOrganizer from '@/hooks/api/event/useGetEventByOrganizer';
import { useAppSelector } from '@/redux/hooks';
import { appConfig } from '@/utils/config';
import React, { useState } from 'react';

const Events = () => {
    const [ page, setPage ] = useState<number>(1);
    const { id } = useAppSelector((state) => state.user);
    const { data: events } = useGetEventsByOrganizer(id);

    const handleChangePaginate = ({selected} : {selected: number}) => {
        setPage(selected + 1);
    };

  return (
    <main className="container px-0 h-screen">
      <section className="mx-auto flex flex-col gap-8 xl:gap-10">
        {/* <h1>Organizer Events</h1> */}
      </section>
      <section className="grid w-full grid-cols-6 gap-8">
        <div className="col-span-2">
          <LeftSection />
        </div>
        <div className="col-span-4">
          {events?.map((event, index) => {
            return(
                <EventCard
                    key={index}
                    title={event.title}
                    category={event.category}
                    description={event.description}
                    createdAt={event.createdAt}
                    eventId={event.id}
                    imageUrl={appConfig.baseUrl + `assets${event.thumbnail}`}
                    location={event.location}
                />
            )
          })}
        </div>
      </section>
    </main>
  );
};

export default Events;
