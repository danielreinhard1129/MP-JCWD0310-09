import EventCard from '@/components/EventCard';
import useGetEvents from '@/hooks/api/event/useGetEvents';
import { appConfig } from '@/utils/config';
import React, { useState } from 'react';

const NewsEvent = () => {
  const [page, setPage] = useState<number>(1);
  const { data: events, meta } = useGetEvents({ page });
  return (
    <div>
      <>
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
      </>
    </div>
  );
};

export default NewsEvent;
