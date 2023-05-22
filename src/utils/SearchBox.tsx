import React, { useState } from 'react';
import { useRouter } from 'next/router';

import { BiSearch } from 'react-icons/bi';

export default function SearchBox() {
  const router = useRouter();
  const [query, setQuery] = useState('');
  //   const submitHandler = (e) => {
  //     e.preventDefault();
  //     router(query ? `/search/?query=${query}` : "/search");
  //   };

  return (
    <>
      <div className="hidden md:flex relative ml-4">
        <input
          type="search"
          onChange={(e) => setQuery(e.target.value)}
          id="search"
          placeholder="Search course"
          className="bg-white border-2 text-white px-8 py-1 rounded-md focus:outline-none"
        />
        <label htmlFor="search" className="absolute top-0 left-0 my-2 ml-2">
          <BiSearch className="text-gray-400" />
        </label>
      </div>
    </>
  );
}
