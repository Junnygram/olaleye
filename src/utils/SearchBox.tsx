import React, { useState } from 'react';
import { useRouter } from 'next/router';

import { AiOutlineSearch } from 'react-icons/ai';

export default function SearchBox() {
  const router = useRouter();
  const [query, setQuery] = useState('');
  //   const submitHandler = (e) => {
  //     e.preventDefault();
  //     router(query ? `/search/?query=${query}` : "/search");
  //   };

  return (
    <>
      <input
        type="search"
        onChange={(e) => setQuery(e.target.value)}
        className=" p-2 mx-4 w-2/5 border-solid border-2 border-cyan-300 text-black"
        placeholder="Search course"
      />
      <AiOutlineSearch
        size={25}
        className="text-cyan-300 mr-auto "
        // onSubmit={submitHandler}
      />
    </>
  );
}
