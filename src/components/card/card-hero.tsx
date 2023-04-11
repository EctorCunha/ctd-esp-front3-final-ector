import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useRouter } from "next/router";
import { Comic } from "../../types/getComic";
import { letterCounter } from "../../helper/letterCounter";
import { useCartContext } from "../../contexts/cart";

export default function CardHero(comic: Comic) {
  const { title, description, thumbnail, stock, prices, characters, id } = comic;
  const thumb = `${thumbnail.path}.${thumbnail.extension}`;
  const { push } = useRouter();
  const { setCart } = useCartContext();

  return (
    <Card
      sx={{
        maxWidth: 350,
        height: 500,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        backgroundColor:'#495057'
      }}
    >
      <CardMedia
        component="img"
        alt="card-hero-image"
        height="250"
        image={`${thumbnail.path}.${thumbnail.extension}`}
        sx={{ objectFit: "cover", objectPosition: "35% 25%" }}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {letterCounter(description, 120)}
        </Typography>
      </CardContent>
      <CardActions sx={{margin:'auto', gap:'3rem'}}>
        <Button
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
         variant="contained" size="small">Comprar</Button>
        <Button variant="contained" size="small" onClick={() => push(`/comic/${id}`)}>
          Ver Detalhes
        </Button>
      </CardActions>
    </Card>
  );
}
