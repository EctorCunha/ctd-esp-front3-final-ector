import * as React from "react";
import {Card, CardActions, CardContent, CardMedia, Button, Typography, List, ListItem} from "@mui/material";
import { useRouter } from "next/router";
import { Comic } from "../../types/getComics";
import { letterCounter } from "src/helper/letterCounter";

export default function CardHero({ thumbnail, title, description, prices, id }: Comic) {
  const { push } = useRouter();

  return (
    <Card
      sx={{
        maxWidth: 350,
        height: 500,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
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
      <CardActions sx={{margin:'auto', gap:'2rem'}}>
        <Button variant="contained" onClick={() => push(`/checkout/${id}`)} size="small">
          Comprar
        </Button>
        <Button variant="contained" onClick={() => push(`/comic/${id}`)} size="small">Ver Detalhes</Button>
      </CardActions>
    </Card>
  );
}
