import { Box, Button, Grid, List, ListItem, Typography } from "@mui/material";
import { getCharacterIdFromUrl } from "src/helper/getCharacterId";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Comic } from "../../types/getComic";
import { useRouter } from "next/router";
import OnLoad from "../onload";

export default function ComicInfo(comic: Comic) {
  const { title, thumbnail, prices, stock, characters, id } = comic;
  console.log(comic)
  const { push } = useRouter();

  const thumb = `${thumbnail?.path}.${thumbnail?.extension}`;

  return (
    <>
      {comic ? (
        <Box sx={{display:'flex', padding:'2rem'}}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              width: "100%",
              gap: "1rem",
            }}
          >
            <Typography variant="h5" component="h4">
              {title}
            </Typography>

            <Typography variant={"h5"}><b>Personagens:</b> </Typography>
            <List sx={{ gap: "10px" }}>
              {characters?.items?.map((character) => (
                <Link
                  href={`/character/${getCharacterIdFromUrl(
                    character?.resourceURI
                  )}`}
                >
                  <ListItem
                    sx={{ cursor: "pointer" }}
                  >{`${character?.name}`}</ListItem>
                </Link>
              ))}
            </List>
            <Typography variant={"h5"}><b>Preços:</b></Typography>
            <List>
              {prices?.map((price) => {
                return (
                  <ListItem>
                    <Typography>{`R$${price.price}`}</Typography>
                  </ListItem>
                );
              })}
            </List>
            <Button disabled={stock <= 0}>
              {stock > 0 ? (
                <Button variant="contained" onClick={() => push(`/checkout/${id}`)}>Comprar</Button>
              ) : (
                "Sem estoque"
              )}
            </Button>
          </Box>

          <Grid item xs={12} md={6}>
            <Box p="3rem">
              <Image src={thumb} width={600} height={700} />
            </Box>
          </Grid>
        </Box>
      ) : (
        <OnLoad />
      )}
    </>
  );
}
