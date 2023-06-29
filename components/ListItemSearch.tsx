import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Props {
  name: string;
  imageUrl: string;
  reposUrl: string;
}

export const ListItemSearch = ({ name, imageUrl, reposUrl }: Props) => {
  return (
    <div className="inline-flex w-full mb-2 space-x-2 ">
      <Image
        src={imageUrl}
        alt="avatar"
        width={100}
        height={100}
        className="rounded-full border-2 border-primary-brand"
      />
      <div className="my-auto">
        <p className="text-lg font-bold">
          <Link href={`/cari/${name}`}>{name}</Link>
        </p>
        <p className="text-sm text-zinc-400 hover:text-primary-brand cursor-pointer">
          <Link href={reposUrl}>Lihat Repo</Link>
        </p>
      </div>
    </div>
  );
};
