import Image from 'next/image';
import React from 'react';

const TagLine = () => {
  return (
    <>
      <div className=" md:h-screen mt-20 bg-whites mb-5">
        <div className="md:text-4xl text-3xl text-center mx-auto font-bold">
          <span className="border-b-4 border-blue-800">Why Choose </span>
          <span className="text-brown-shades border-b-4 border-b-brown-tints  ">
            EventWarr?
          </span>
        </div>
        <div>
          <h3 className="text-md text-center mx-auto mt-11 ">
            EventWarr stands for Event Warrior, which means we fight to meet all
            the needs of event creators and buyers in creating an event
          </h3>
        </div>

        <div className="md:flex md:justify-center xs:flex-col  text-center mx-auto gap-8 mt-11">
          <div>
            {/* 1 */}
            <Image
              className="mx-auto"
              src="/create.png"
              alt="create.png"
              width={60}
              height={60}
            ></Image>
            <h1 className="my-5 text-brown-shades font-bold ">
              Multiple Events
            </h1>
            <p>
              Host various events effortlessly with EventWar conferences,
              workshops, expos, and more. Expand your reach now!
            </p>
          </div>
          <div>
            {/* 2 */}
            <Image
              className="mx-auto"
              src="/events.png"
              alt="events.png"
              width={60}
              height={60}
            ></Image>
            <h1 className="my-5 text-brown-shades font-bold ">
              Event Management
            </h1>
            <p>
              Streamline your event planning with our robust tools. Effortlessly
              coordinate, track, and optimize events.
            </p>
          </div>
          <div>
            {/* 3 */}
            <Image
              className="mx-auto"
              src="/venue.png"
              alt="venue.png"
              width={60}
              height={60}
            ></Image>
            <h1 className="my-5 text-brown-shades font-bold ">
              Venue Management
            </h1>
            <p>
              Secure, seamless transactions with multiple gateways. Simplify
              ticket sales and donations for your events.
            </p>
          </div>
          <div>
            {/* 4 */}
            <Image
              className="mx-auto"
              src="/payment.png"
              alt="payment.png"
              width={60}
              height={60}
            ></Image>
            <h1 className="my-5 text-brown-shades font-bold ">
              Payment Management
            </h1>
            <p>
              Explore, compare, and book the perfect venue. Maximize your events
              impact with our venue management tools.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default TagLine;
