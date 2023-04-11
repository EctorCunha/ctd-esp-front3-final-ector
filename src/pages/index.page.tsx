import type { GetServerSideProps } from "next";
import Head from "next/head";
import BodySingle from "../components/layouts/body/single/body-single";
import { getComics } from "../services/marvel/marvel.service";
import CardHero from "../components/card/card-hero";
import { Comic } from "../types/getComic";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";

export default function Index({ data }: { data: Comic[] }) {
  return (
    <>
      <Head>
        <title>Marvel Comics</title>
        <meta name="description" content="Marvel Comics - CTD" />
        <link rel="icon" href="/marvel-comics.png" />
      </Head>

      <BodySingle>
        <Grid2
          sx={{ padding: "2rem" }}
          container
          spacing={3}
          justifyContent="center"
        >
          {data?.map((comic) => (
            <Grid2 key={comic.id} xs={12} sm={6} md={4}>
              <CardHero {...comic} />
            </Grid2>
          ))}
        </Grid2>
      </BodySingle>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const { data: comics } = await getComics(10, 100);
  
  const data = comics.results
  .filter((comic) => !!comic.thumbnail && !!comic.description)
  .slice(0, 12);

  return {
    props: {
      data: data,
    },
  };
};
