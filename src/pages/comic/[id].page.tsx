import React from "react";
import Head from "next/head";
import ComicInfo from "../../components/buy";
import { getComic, getComics } from "../../services/marvel/marvel.service";
import { GetStaticPaths, GetStaticPropsContext } from "next";
import { Comic } from "../../types/getComic";

export default function Index(data: Comic) {
  return (
    <>
    <Head>
      <title>Marvel Comics</title>
      <meta name="description" content="Marvel Comics - CTD" />
      <link rel="icon" href="/marvel-comics.png" />
    </Head>
  <ComicInfo {...data} />;
  </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const { data: comics } = await getComics(100, 100);

  const data = comics.results
    .filter((comic) => !!comic.thumbnail && !!comic.description)
    .slice(0, 12);

  const paths = data.map((comic) => {
    return {
      params: {
        id: comic.id.toString(),
      },
    };
  });

  return {
    paths,
    fallback: "blocking",
  };
};

type Params = {
  id: string;
};

export const getStaticProps = async (ctx: GetStaticPropsContext<Params>) => {
  const { params } = ctx;

  const comic = await getComic(Number(params?.id));

  if (!comic)
    return {
      notFound: true,
    };

  return {
    props: comic,
  };
};
