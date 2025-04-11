'use client';

import { Label, Listbox, ListboxButton, ListboxOption, ListboxOptions } from '@headlessui/react';
import { ChevronUpDownIcon } from '@heroicons/react/16/solid';
import { CheckIcon } from '@heroicons/react/20/solid';
import { useState } from 'react';

const people = [
  { id: 1, name: 'Wade Cooper' },
  { id: 2, name: 'Arlene Mccoy' },
  { id: 3, name: 'Devon Webb' },
  { id: 4, name: 'Tom Cook' },
  { id: 5, name: 'Tanya Fox' },
  { id: 6, name: 'Hellen Schmidt' },
  { id: 7, name: 'Caroline Schultz' },
  { id: 8, name: 'Mason Heaney' },
  { id: 9, name: 'Claudie Smitham' },
  { id: 10, name: 'Emil Schaefer' },
];

export default function DropdownSelection() {
  const [selected, setSelected] = useState( people[3] );

  return (
    <Listbox value={selected} onChange={setSelected}>
      <Label className="block font-medium text-sm/6">Assigned to</Label>
      <div className="relative mt-2">
        <ListboxButton className="grid grid-cols-1 py-1.5 pr-2 pl-3 rounded-md w-full text-left sm:text-sm/6 cursor-default outline-1 -outline-offset-1">
          <span className="col-start-1 row-start-1 pr-6 truncate">{selected.name}</span>
          <ChevronUpDownIcon
            aria-hidden="true"
            className="justify-self-end col-start-1 row-start-1 size-5 self-center sm:size-4"
          />
        </ListboxButton>

        <ListboxOptions
          transition
          className="z-10 absolute focus:outline-hidden data-closed:data-leave:opacity-0 shadow-lg mt-1 py-1 rounded-md ring-1 ring-black/5 w-full max-h-60 text-base sm:text-sm data-leave:transition data-leave:duration-100 overflow-auto data-leave:ease-in"
        >
          {people.map( ( person ) => (
            <ListboxOption
              key={person.id}
              value={person}
              className="group relative data-focus:outline-hidden py-2 pr-4 pl-8 cursor-default select-none"
            >
              <span className="block font-normal group-data-selected:font-semibold truncate">{person.name}</span>

              <span className="group- left-0 absolute inset-y-0 flex items-center group-not-data-selected:hidden pl-1.5">
                <CheckIcon aria-hidden="true" className="size-5" />
              </span>
            </ListboxOption>
          ) )}
        </ListboxOptions>
      </div>
    </Listbox>
  );
}
