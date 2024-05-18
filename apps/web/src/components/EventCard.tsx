import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { event } from 'cypress/types/jquery';
import { format } from 'date-fns';
import { CalendarDays } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

interface EventCardProps {
  title: string;
  description: string;
  category: string;
  imageUrl: string;
  createdAt: Date;
  eventId: number;
  location: string;
}

const EventCard: FC<EventCardProps> = ({
  title,
  location,
  category,
  description,
  imageUrl,
  createdAt,
  eventId,
}) => {
  return (
    <Link href={`/${eventId}`}>
      <Card className="relative border border-brown-shades">
        <CardHeader className="relative">
          <div className="relative h-[220px] w-full overflow-hidden rounded-md">
            <Image
              src={imageUrl}
              alt="thumbnail"
              className="object-cover"
              fill
            />
          </div>
          <div className="absolute top-4">
            <Badge
              variant="outline"
              className="rounded-md p-1 bg-brown-tints text-bold"
            >
              {category}
            </Badge>
          </div>
        </CardHeader>
        <CardContent className="absolute bottom-1 left-12 w-3/4 bg-opacity-5  text-whites mx-auto text-center ">
          <div className="bg-stone-900 rounded-md">
            <h2 className="line-clamp-2 text-base font-semibold mx-auto text-center">
              {title}
            </h2>
            <p className="text-sm font-light italic relative">
              {format(createdAt, 'dd MMMM yyyy')} - {location}
            </p>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default EventCard;
