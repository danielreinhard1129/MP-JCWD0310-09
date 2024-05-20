'use client';

import EventCard from '@/components/EventCard';
import Pagination from '@/components/pagination';
import useGetEvent from '@/hooks/api/event/useGetEvent';
import useGetEvents from '@/hooks/api/event/useGetEvents';
import { appConfig } from '@/utils/config';

import { useState } from 'react';

const CategoryCard = ({ params }: { params: { id: string } }) => {
  const { event } = useGetEvent(Number(params.id));
  const [page, setPage] = useState<number>(1);
  const { data: events, meta } = useGetEvents({
    page,
    take: 3,
  });
  const handleChangePaginate = ({ selected }: { selected: number }) => {
    setPage(selected + 1);
  };

  // if (!event) {
  //   return notFound();
  // }

  return (
    <>
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

export default CategoryCard;
