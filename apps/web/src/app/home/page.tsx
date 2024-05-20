import React from 'react';
import { LandingPage } from './LandingPage';
import { Contents } from './Content';
import TagLine from './TagLine';
import NewestEvents from './NewestEvents';

const Homes = () => {
  return (
    <>
      <LandingPage />
      <NewestEvents />
      {/* <Contents /> */}
      <TagLine />
    </>
  );
};

export default Homes;
