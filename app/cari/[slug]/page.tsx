import React, { Suspense } from "react";

async function getDataUser(slug: string) {
  const res = await fetch(`https://api.github.com/users/${slug}`);
  return res.json();
}

async function getDataRepos(param: string) {
  const res = await fetch(`https://api.github.com/users/${param}/repos`);
  await new Promise((r) => setTimeout(r, 3000));
  return res.json();
}

const ResultRepos = async ({ param }: any) => {
  const dataRepos = await getDataRepos(param);

  return (
    <>
      <p>List Repository</p>
      <div>{JSON.stringify(dataRepos)}</div>
    </>
  );
};

//params disini sudah di destructering {params}:{ini type datanya karana pakai type script, asu susah pake ts cok}
export default async function DetailCari({
  params,
}: {
  params: { slug: string };
}) {
  const dataUser = await getDataUser(params.slug);

  return (
    <div>
      <p>Detail User: {params.slug}</p>
      <div>{JSON.stringify(dataUser)}</div>

      <div style={{ marginTop: "20px" }}>
        <Suspense
          fallback={<div>Tunggu ya sendang mengambil repository...</div>}
        >
          {/*@ts-ignore */}
          <ResultRepos param={params.slug} />
        </Suspense>
      </div>
    </div>
  );
}
