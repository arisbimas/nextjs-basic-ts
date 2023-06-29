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
      <form onSubmit={onSearch}>
        <input placeholder="cari user github" />
        <button>Cari</button>
      </form>
      {query && <SectionResultList query={query} />}
    </div>
  );
}
