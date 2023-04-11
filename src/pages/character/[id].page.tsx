import CharacterInfo from "../../components/card-character";
import { getCharacter } from "../../services/marvel/marvel.service";
import { isEmpty } from "lodash";
import { GetServerSideProps, GetServerSidePropsContext } from "next";
import React from "react";
import { Character } from "../../types/getCharacter";
import Head from "next/head";

export default function Index({ data }: { data: Character }) {
  return (
    <>
    <Head>
      <title>Marvel Comics</title>
      <meta name="description" content="Marvel Comics - CTD" />
      <link rel="icon" href="/marvel-comics.png" />
    </Head>
  <CharacterInfo {...data} />;
  </>
  )
}

type Params = {
  id: string;
};

export const getServerSideProps: GetServerSideProps<any, Params> = async (
  context: GetServerSidePropsContext<Params>
) => {
  const { params } = context;

  if (params?.id) {
    const characters = await getCharacter(
      Number(decodeURIComponent(params.id))
    );
    return {
      props: {
        data: characters,
      },
    };
  }

  return {
    notFound: true,
  };
};
