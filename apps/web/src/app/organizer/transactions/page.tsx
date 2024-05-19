import LeftSection from '@/components/LeftSection';
import React from 'react';

const Transactions = () => {
  return (
    <main className="container px-0 h-screen">
      <section className="mx-auto flex flex-col gap-8 xl:gap-10">
        {/* <h1>Organizer Transactions</h1> */}
      </section>
      <section className="grid w-full grid-cols-6 gap-8">
        <div className="col-span-2">
            <LeftSection />
        </div>
        <div className="col-span-4">
            Transaction
        </div>
      </section>
    </main>
  );
};

export default Transactions;
