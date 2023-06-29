import { ListItemSearch } from "@/components/ListItemSearch";
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
      <p>
        Hasil Pencarian: <span className="font-bold">{query}</span>
      </p>
      {isLoading && "Loading..."}
      <div>
        {data &&
          data?.items.map((item: any, idx: number) => {
            return (
              <>
                <ListItemSearch
                  key={idx}
                  name={item.owner.login}
                  imageUrl={item.owner.avatar_url}
                  reposUrl={item.owner.repos_url}
                />
              </>
            );
          })}
      </div>
    </div>
  );
}
