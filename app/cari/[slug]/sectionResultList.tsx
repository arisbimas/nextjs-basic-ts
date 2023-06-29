import Link from "next/link";
import React from "react";
import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

interface Props {
  query: string;
}

export default function SectionResultList({ query }: Props) {
  const { data, error, isLoading } = useSWR(
    `https://api.github.com/search/repositories?q=${query}`,
    fetcher
  );

  return (
    <div>
      <p>Hasil Pencarian: {query}</p>
      {isLoading && "Loading..."}
      <div>
        {data &&
          data?.items.map((item: any, idx: number) => {
            return (
              <ul key={idx}>
                <li>
                  <Link href={`/cari/${item.owner.login}`}>
                    {item.owner.login}
                  </Link>
                </li>
                <li>
                  <Link href={item.owner.repos_url}>Repository</Link>
                </li>
              </ul>
            );
          })}
      </div>
    </div>
  );
}
