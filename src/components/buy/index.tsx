import { Box, Button, Grid, List, ListItem, Typography } from "@mui/material";
import { useCartContext } from "../../contexts/cart";
import { getCharacterIdFromUrl } from "../../helper/getCharacterId";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { Comic } from "../../types/getComic";


export default function ComicInfo(comic: Comic) {
  const { title, thumbnail, prices, stock, characters } = comic;

  const { push } = useRouter();

  const { setCart } = useCartContext();

  const thumb = `${thumbnail.path}.${thumbnail.extension}`;

  return (
    <Grid sx={{backgroundColor:'#495057'}} container padding={"3rem"}>
      
      <Grid item xs={12} md={6}>
        <Box sx={{display:'flex', justifyContent:'center', alignItems:'center', margin:'auto'}} p="1rem">
          <Image src={thumb} width={500} height={550} />
        </Box>
      </Grid>

      <Grid item xs={12} md={6}>
        <Box sx={{display:'flex', justifyContent:'center', alignItems:'center', gap:'3rem', flexDirection:'column'}}>
          <Typography variant="h4" component="h4">
            {title}
          </Typography>

          <Box>
            <Typography component={"h3"}><b>Personagens:</b></Typography>
            <List sx={{ gap: "10px", width: "fit-content" }}>
              {characters.items.map((character) => {
                const characterId = character.resourceURI
                  ? encodeURIComponent(
                      getCharacterIdFromUrl(character.resourceURI)!
                    )
                  : "";
                return (
                  <Link href={`/character/${characterId}`}>
                    <ListItem
                      sx={{
                        cursor: "pointer",
                        "&:hover": { color: "#1976d2" },
                      }}
                    >{`${character.name}`}</ListItem>
                  </Link>
                );
              })}
            </List>
          </Box>

          <Box>
            <Typography component={"h3"}><b>Preços:</b></Typography>
            <Typography>R$ {prices[0].price}</Typography>
          </Box>

          <Button
            variant="contained"
            onClick={() => {
              setCart({
                prices: comic.prices[0].price,
                stock: comic.stock,
                thumbnail: thumb,
                title: comic.title,
                description: comic.description,
              });

              push("/checkout/checkout");
            }}
            disabled={stock <= 0}
          >
            {stock > 0 ? "Comprar" : "Sem estoque"}
          </Button>
        </Box>
      </Grid>
    </Grid>
  );
}
