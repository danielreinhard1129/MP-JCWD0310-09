'use client';
import Navbar from '@/components/Navbar';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { Card, CardContent } from '@/components/ui/card';
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
import React from 'react';
import { LuMapPin } from 'react-icons/lu';
import { MdOutlinePendingActions } from 'react-icons/md';
import { FaMoneyCheckAlt } from 'react-icons/fa';
import Cards from './Cards';

const Events = () => {
  const [date, setDate] = React.useState<Date>();
  return (
    <>
      <Navbar />

      <div className="bg-[url('/bg-events.jpg')] bg-cover w-full h-[300px] text-white">
        <div className="container mx-auto text-center grid grid-cols-5 justify-center h-full ">
          <div className="my-auto">
            <Input
              type="Events"
              placeholder="Search Event"
              className="text-center"
            />
          </div>

          {/* Category */}
          <div className=" my-auto ">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="w-3/4">
                  Category
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-48 text-center">
                <DropdownMenuLabel>Categories</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuRadioGroup>
                  <DropdownMenuRadioItem value="sports">
                    <Link href={'/'}>
                      <p className="hover:text-maroon-tints hover:border-b">
                        Sports
                      </p>
                    </Link>
                  </DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value="travels">
                    <Link href={'/'}>
                      {' '}
                      <p className="hover:text-maroon-tints hover:border-b">
                        Travels
                      </p>
                    </Link>
                  </DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value="festival">
                    <Link href={'/'}>
                      {' '}
                      <p className="hover:text-maroon-tints hover:border-b">
                        Festival
                      </p>
                    </Link>
                  </DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value="nightlife">
                    <Link href={'/'}>
                      {' '}
                      <p className="hover:text-maroon-tints hover:border-b">
                        NightLife
                      </p>
                    </Link>
                  </DropdownMenuRadioItem>
                </DropdownMenuRadioGroup>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* Status */}
          <div className="my-auto">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="w-3/4">
                  Status
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56">
                <DropdownMenuLabel>Status</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuRadioGroup>
                  <DropdownMenuRadioItem value="upcoming">
                    <Link href={'/'}>
                      {' '}
                      <p className="hover:text-maroon-tints hover:border-b">
                        Upcoming
                      </p>
                    </Link>
                  </DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value="showing">
                    <Link href={'/'}>
                      {' '}
                      <p className="hover:text-maroon-tints hover:border-b">
                        Showing
                      </p>
                    </Link>
                  </DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value="expired">
                    <Link href={'/'}>
                      {' '}
                      <p className="hover:text-maroon-tints hover:border-b">
                        Expired
                      </p>
                    </Link>
                  </DropdownMenuRadioItem>
                </DropdownMenuRadioGroup>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* Calendar */}
          <div className="my-auto">
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant={'outline'}
                  className={cn(
                    'w-3/4 justify-start text-left font-normal',
                    !date && 'text-muted-foreground',
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {date ? format(date, 'PPP') : <span>Select Date</span>}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar
                  className="bg-woodsmokey text-whites rounded-md"
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
          </div>
          <div className="my-auto">
            <Button
              className="w-3/4 bg-brown-tints hover:bg-transparent"
              variant="outline"
            >
              SEARCH
            </Button>
          </div>
        </div>
      </div>

      <div className="container grid grid-cols-3 mb-10 gap-5">
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
      </div>
    </>
  );
};

export default Events;