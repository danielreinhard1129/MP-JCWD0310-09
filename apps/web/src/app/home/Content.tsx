import { CalendarIcon } from '@radix-ui/react-icons';
import Image from 'next/image';
import { FaMoneyCheckAlt } from 'react-icons/fa';
import { LuMapPin } from 'react-icons/lu';
import { MdOutlinePendingActions } from 'react-icons/md';
import { Badge } from '../../components/ui/badge';
import { Button } from '../../components/ui/button';

export const Contents = () => {
  return (
    <>
      <div className="mt-32 mx-auto text-center">
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

      <div className="container grid lg:grid-cols-3 md:grid-cols-2  grid-cols-1  gap-1">
        {/* Newest Events 1 */}
        <div className="mx-auto mt-5">
          <div className=" md:mx-auto relative md:w-[500px] md:h-[400px] w-[380px] h-[450px]   ">
            <Image
              className="mx-auto rounded-md xl:w-96 xl:h-64 md:w-72 md:h-52"
              src="/grindelwald.jpg"
              alt="grindelwald.jpg"
              width={400}
              height={300}
            ></Image>
            <div className="w-3/4 mx-auto absolute bottom-0 md:left-16 left-12 rounded-md bg-whites border-t-2 border-t-brown-shades border-b-2 border-b-brown-shades">
              <h3 className="mx-auto text-center text-md font-bold py-1 hover:text-brown-shades cursor-pointer">
                Gateway to Swiss Alpine Wonders
              </h3>
              <div className="flex justify-around ">
                <div>
                  <Badge className="bg-brown-tints">Travel</Badge>
                </div>
                <div className="my-auto">
                  <p className="mx-auto my-auto text-sm flex gap-2">
                    <CalendarIcon className="mx-auto my-auto" /> May 20, 2024
                  </p>
                </div>
              </div>

              <p className="p-1 text-sm h-32">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
                ipsam saepe animi eos cum. Veniam accusantium dolorem, explicabo
                neque fuga eveniet ea harum, facere dolores quisquam ad, error
                sit tempore?
              </p>
              <div className="flex justify-around">
                <div className="my-auto">
                  <Badge className="bg-whites">Available Ticket: 25</Badge>
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
                  <p className="text-xs my-auto">Los Angles</p>
                </div>
                <div className="flex gap-1">
                  <FaMoneyCheckAlt className="my-auto" />{' '}
                  <p className="text-xs my-auto">Rp.40000</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Newest Events 1 */}

        {/* Newest Events 2 */}
        <div className="mx-auto mt-5">
          <div className=" mx-auto relative md:w-[500px] md:h-[400px] w-[380px] h-[450px]">
            <Image
              className="mx-auto rounded-md xl:w-96 xl:h-64 md:w-72 md:h-52"
              src="/wembley.jpg"
              alt="wembley.jpg"
              width={400}
              height={300}
            ></Image>
            <div className="w-3/4 mx-auto absolute bottom-0 md:left-16 left-12 rounded-md bg-whites border-t-2 border-t-brown-shades border-b-2 border-b-brown-shades">
              <h3 className="mx-auto text-center text-md font-bold py-1 hover:text-brown-shades cursor-pointer">
                Final Champions League 2024
              </h3>
              <div className="flex justify-around ">
                <div>
                  <Badge className="bg-brown-tints">Sports</Badge>
                </div>
                <div className="my-auto">
                  <p className="mx-auto my-auto text-sm flex gap-2">
                    <CalendarIcon className="mx-auto my-auto" /> May 08, 2024
                  </p>
                </div>
              </div>

              <p className="p-1 text-sm h-32">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
                ipsam saepe animi eos cum. Veniam accusantium dolorem, explicabo
                neque fuga eveniet ea harum, facere dolores quisquam ad, error
                sit tempore?
              </p>
              <div className="flex justify-around">
                <div className="my-auto">
                  <Badge className="bg-whites">Available Ticket: 20</Badge>
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
                  <p className="text-xs my-auto">London</p>
                </div>
                <div className="flex gap-1">
                  <FaMoneyCheckAlt className="my-auto" />{' '}
                  <p className="text-xs my-auto">Rp.500000</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Newest Events 2 */}

        {/* Newest Events 3 */}
        <div className="mx-auto mt-5">
          <div className=" mx-auto relative md:w-[500px] md:h-[400px] w-[380px] h-[450px]">
            <Image
              className="mx-auto rounded-md xl:w-96 xl:h-64 md:w-72 md:h-52"
              src="/cappadocia.jpg"
              alt="cappadocia.jpg"
              width={400}
              height={300}
            ></Image>
            <div className="w-3/4 mx-auto absolute bottom-0 md:left-16 left-12 rounded-md bg-whites border-t-2 border-t-brown-shades border-b-2 border-b-brown-shades">
              <h3 className="mx-auto text-center text-md font-bold py-1 hover:text-brown-shades cursor-pointer">
                Land of Fairy Chimneys in Cappodocia
              </h3>
              <div className="flex justify-around ">
                <div>
                  <Badge className="bg-brown-tints">Travel</Badge>
                </div>
                <div className="my-auto">
                  <p className="mx-auto my-auto text-sm flex gap-2">
                    <CalendarIcon className="mx-auto my-auto" /> May 11, 2024
                  </p>
                </div>
              </div>

              <p className="p-1 text-sm h-32">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
                ipsam saepe animi eos cum. Veniam accusantium dolorem, explicabo
                neque fuga eveniet ea harum, facere dolores quisquam ad, error
                sit tempore?
              </p>
              <div className="flex justify-around">
                <div className="my-auto">
                  <Badge className="bg-whites">Available Ticket: 15</Badge>
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
                  <p className="text-xs my-auto">Turkey</p>
                </div>
                <div className="flex gap-1">
                  <FaMoneyCheckAlt className="my-auto" />{' '}
                  <p className="text-xs my-auto">Rp.400000</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Newest Events 3 */}

        {/* Newest Events 4 */}
        <div className="mx-auto mt-5">
          <div className=" mx-auto relative md:w-[500px] md:h-[400px] w-[380px] h-[450px]">
            <Image
              className="mx-auto rounded-md xl:w-96 xl:h-64 md:w-72 md:h-52"
              src="/disney.jpg"
              alt="disney.jpg"
              width={400}
              height={300}
            ></Image>
            <div className="w-3/4 mx-auto absolute bottom-0 md:left-16 left-12 rounded-md bg-whites border-t-2 border-t-brown-shades border-b-2 border-b-brown-shades">
              <h3 className="mx-auto text-center text-md font-bold py-1 hover:text-brown-shades cursor-pointer">
                Spring At Disney Land Tokyo
              </h3>
              <div className="flex justify-around ">
                <div>
                  <Badge className="bg-brown-tints">Festival</Badge>
                </div>
                <div className="my-auto">
                  <p className="mx-auto my-auto text-sm flex gap-2">
                    <CalendarIcon className="mx-auto my-auto" /> May 12, 2024
                  </p>
                </div>
              </div>

              <p className="p-1 text-sm h-32">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
                ipsam saepe animi eos cum. Veniam accusantium dolorem, explicabo
                neque fuga eveniet ea harum, facere dolores quisquam ad, error
                sit tempore?
              </p>
              <div className="flex justify-around">
                <div className="my-auto">
                  <Badge className="bg-whites">Available Ticket: 10</Badge>
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
                  <p className="text-xs my-auto">Japan</p>
                </div>
                <div className="flex gap-1">
                  <FaMoneyCheckAlt className="my-auto" />{' '}
                  <p className="text-xs my-auto">Rp.450000</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Newest Events 4 */}

        {/* Newest Events 5 */}
        <div className="mx-auto mt-5">
          <div className=" mx-auto relative md:w-[500px] md:h-[400px] w-[380px] h-[450px]">
            <Image
              className="mx-auto rounded-md xl:w-96 xl:h-64 md:w-72 md:h-52"
              src="/bora-bora.jpg"
              alt="bora-bora.jpg"
              width={400}
              height={300}
            ></Image>
            <div className="w-3/4 mx-auto absolute bottom-0 md:left-16 left-12 rounded-md bg-whites border-t-2 border-t-brown-shades border-b-2 border-b-brown-shades">
              <h3 className="mx-auto text-center text-md font-bold py-1 hover:text-brown-shades cursor-pointer">
                Exploring Bora-Bora Island At Ocean Pacific
              </h3>
              <div className="flex justify-around ">
                <div>
                  <Badge className="bg-brown-tints">Travel</Badge>
                </div>
                <div className="my-auto">
                  <p className="mx-auto my-auto text-sm flex gap-2">
                    <CalendarIcon className="mx-auto my-auto" /> May 15, 2024
                  </p>
                </div>
              </div>

              <p className="p-1 text-sm h-32">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
                ipsam saepe animi eos cum. Veniam accusantium dolorem, explicabo
                neque fuga eveniet ea harum, facere dolores quisquam ad, error
                sit tempore?
              </p>
              <div className="flex justify-around">
                <div className="my-auto">
                  <Badge className="bg-whites">Available Ticket: 29</Badge>
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
                  <p className="text-xs my-auto">Ocean Pacific</p>
                </div>
                <div className="flex gap-1">
                  <FaMoneyCheckAlt className="my-auto" />{' '}
                  <p className="text-xs my-auto">Rp.700000</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Newest Events 5 */}

        {/* Newest Events 6 */}
        <div className="mx-auto mt-5">
          <div className=" mx-auto relative md:w-[500px] md:h-[400px] w-[380px] h-[450px]">
            <Image
              className="mx-auto rounded-md xl:w-96 xl:h-64 md:w-72 md:h-52"
              src="/concert.jpg"
              alt="concert.jpg"
              width={400}
              height={300}
            ></Image>
            <div className="w-3/4 mx-auto absolute bottom-0 md:left-16 left-12 rounded-md bg-whites border-t-2 border-t-brown-shades border-b-2 border-b-brown-shades">
              <h3 className="mx-auto text-center text-md font-bold py-1 hover:text-brown-shades cursor-pointer">
                Redefining Luxury Living in Los Angeles
              </h3>
              <div className="flex justify-around ">
                <div>
                  <Badge className="bg-brown-tints">NightLife</Badge>
                </div>
                <div className="my-auto">
                  <p className="mx-auto my-auto text-sm flex gap-2">
                    <CalendarIcon className="mx-auto my-auto" /> May 20, 2024
                  </p>
                </div>
              </div>

              <p className="p-1 text-sm h-32">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
                ipsam saepe animi eos cum. Veniam accusantium dolorem, explicabo
                neque fuga eveniet ea harum, facere dolores quisquam ad, error
                sit tempore?
              </p>
              <div className="flex justify-around">
                <div className="my-auto">
                  <Badge className="bg-whites">Available Ticket: 7</Badge>
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
                  <p className="text-xs my-auto">Los Angles</p>
                </div>
                <div className="flex gap-1">
                  <FaMoneyCheckAlt className="my-auto" />{' '}
                  <p className="text-xs my-auto">Rp.400000</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Newest Events 6 */}
      </div>
      <div className="mx-auto text-center mt-16">
        <Button className="bg-maroon-tints hover:bg-brown-tints hover:text-white">
          Show All Events
        </Button>
      </div>
    </>
  );
};
