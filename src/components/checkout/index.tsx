// import { Box } from "@mui/material";
// import Steps from "./Steps";
// import { GetStaticPaths, GetStaticPropsContext } from "next";
// import { getComic, getComics } from "src/services/marvel/marvel.service";
// import { Comic } from "src/types/getComics";

// export default function Checkout(data: Comic) {
//     console.log(data)
//   return (
//     <Box m={10} sx={{ width: "50%" }}>
//       <Steps {...data} />
//     </Box>
//   );
// }


// export const getStaticPaths: GetStaticPaths = async () => {
//     const { data: comics } = await getComics(100, 100);
  
//     const data = comics.results
//       .filter((comic: { thumbnail: any; description: any; }) => !!comic.thumbnail && !!comic.description)
//       .slice(0, 12);
  
//     const paths = data.map((comic: { id: { toString: () => any; }; }) => {
//       return {
//         params: {
//           id: comic.id.toString(),
//         },
//       };
//     });
  
  
//     return {
//       paths,
//       fallback: "blocking",
//     };
//   };
  
//   type Params = {
//     id: string;
//   };
  
//   export const getStaticProps = async (ctx: GetStaticPropsContext<Params>) => {
//     const { params } = ctx;
  
//     const comic = await getComic(Number(params?.id));
  
//     if (!comic) return;
  
//     return {
//       props: comic,
//     };
//   };
  