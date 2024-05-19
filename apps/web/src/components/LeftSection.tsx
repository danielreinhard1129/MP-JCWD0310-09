'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';

const LeftSection = () => {
    const router = useRouter();

    return (
        <div className="bg-[#B66772] h-screen flex justify-center">
            <div className="mt-10 flex flex-col space-y-4">
                <Button 
                    variant="ghost" 
                    className="justify-start text-white cursor-pointer hover:bg-[#994455] active:bg-[#772233]"
                    onClick={() => router.push('/organizer/')}
                    aria-label="Go to Events page"
                >
                    Home
                </Button>
                <Button 
                    variant="ghost" 
                    className="justify-start text-white cursor-pointer hover:bg-[#994455] active:bg-[#772233]"
                    onClick={() => router.push('/organizer/events')}
                    aria-label="Go to Events page"
                >
                    Events
                </Button>
                <Button 
                    variant="ghost" 
                    className="justify-start text-white cursor-pointer hover:bg-[#994455] active:bg-[#772233]"
                    onClick={() => router.push('/statistic')}
                    aria-label="Go to Statistic page"
                >
                    Statistic
                </Button>
                <Button 
                    variant="ghost" 
                    className="justify-start text-white cursor-pointer hover:bg-[#994455] active:bg-[#772233]"
                    onClick={() => router.push('/organizer/transactions')}
                    aria-label="Go to Transaction page"
                >
                    Transaction
                </Button>
            </div>
        </div>
    );
};

export default LeftSection;
