import useGetEvent from '@/hooks/api/event/useGetEvent';
import React from 'react';

const Header = () => {
  return (
    <>
      <main className="mx-auto">
        <div className="bg-[url('/decker.jpg')] w-full h-[250px] bg-cover mx-auto mr-5 blur-0 relative">
          <div>
            <h3 className="text-whites text-3xl font-semibold relative top-24 left-5">
              EVENTWARR{' '}
              <span className="text-brown-tints font-semibold text-3xl">
                FESTIVAL
              </span>
            </h3>
          </div>
        </div>
      </main>
    </>
  );
};

export default Header;
