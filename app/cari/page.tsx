"use client";
import React, { useState } from "react";
import SectionResultList from "./[slug]/sectionResultList";

export default function Cari() {
  const [query, setQuery] = useState("");
  const onSearch = (e: any) => {
    e.preventDefault();
    setQuery(e.target[0].value);
  };
  return (
    <div>
      <form onSubmit={onSearch} className="w-full inline-flex">
        <input
          className="shadow appearance-none border rounded mr-2 py-2 px-3 w-5/6 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="cari user github"
        />
        <button className="bg-gradient-to-tl from-secondary-brand to-primary-brand w-1/6 rounded text-white">
          Cari
        </button>
      </form>
      {query && <SectionResultList query={query} />}
    </div>
  );
}
