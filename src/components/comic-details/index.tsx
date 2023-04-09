import { Box, Grid, List, ListItem, Typography } from "@mui/material";
import { getComicIdFromUrl } from "../../helper/getComicId";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Character } from "../../types/getCharacter";

export default function CharacterInfo(comic: Character) {
  const comics = comic?.data?.map((comic: Character) => comic?.comics);

  return (
    <Grid container>
      <Grid item xs={12} md={6}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            width: "90vw",
          }}
        >
            {comic.data.map((comic: Character) => {
              return (
                <Box key={comic.id} sx={{ display: "flex", justifyContent: "center", padding:'2rem' }}>
                <Image
                  src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
                  width={300}
                  height={250}
                />
          </Box>
              );
            })}
          <Typography sx={{ padding: "1rem" }} variant="h5">
            Comics:
          </Typography>
          <List sx={{ gap: "10px", width: "fit-content" }}>
            {comics[0].items?.map((comic: Character) => {
              const characterId = comic?.resourceURI
                ? encodeURIComponent(getComicIdFromUrl(comic?.resourceURI))
                : "";
              return (
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "column",
                  }}
                >
                  <Link href={`/comic/${characterId}`}>
                    <ListItem
                      sx={{
                        cursor: "pointer",
                        "&:hover": { color: "#1976d2" },
                      }}
                    >
                      {`${comic.name}`}
                    </ListItem>
                  </Link>
                  <Grid item xs={12} md={6}>
                    {/* <Typography variant="h5" component="h4">
                        {comic.description ??
                          "Não há descrição para este personagem"}
                      </Typography> */}
                  </Grid>
                </Box>
              );
            })}
          </List>
        </Box>
      </Grid>
    </Grid>
  );
}
