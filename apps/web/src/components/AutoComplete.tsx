'use client';

import useGetEvents from '@/hooks/api/event/useGetEvents';
import { appConfig } from '@/utils/config';
import { debounce } from 'lodash';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import AsyncSelect from 'react-select/async';

interface EventOption {
  value: number;
  label: string;
}

const AutoComplete = () => {
  const router = useRouter();
  const [search, setSearch] = useState<string>('');

  const { data, isLoading } = useGetEvents({ search });

  const loadOptions = (
    inputValue: string,
    callback: (options: EventOption[]) => void,
  ) => {
    try {
      const options = data.map((event) => {
        return {
          label: event.title,
          value: event.id,
        };
      });
      callback(options);
      setSearch(inputValue);
    } catch (error) {
      callback([]);
    }
  };

  const debouncedLoadOptions = debounce(loadOptions, 750);

  return (
    <AsyncSelect
      placeholder="Search for events"
      className="mx-auto my-4 max-w-[650px] text-slate-950 bg-transparent hover:text-brown-shades text-center"
      loadOptions={debouncedLoadOptions}
      isLoading={isLoading}
      onChange={(event) => {
        router.push(appConfig.baseUrlNext + `/${event?.value}`);
      }}
    />
  );
};

export default AutoComplete;
