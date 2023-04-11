import React from "react";
import { Grid, Paper, Box, Typography } from "@mui/material";
import { Comic } from "../../types/getComic";
import Image from "next/image";
import { letterCounter } from "../../helper/letterCounter";

interface ComicDetail {
  title: string;
  thumbnail: string;
  prices: number;
  stock: number;
  description: string;
  children?: React.ReactNode;
}

const ComicDetail = (props: ComicDetail) => {
  const { description, prices, stock, thumbnail, title } = props;

  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12} md={5}>
          <Image src={thumbnail} height={500} width={550} />
        </Grid>
        <Grid item xs={12} md={7}>
          <Box display="flex" flexDirection="column" height="100%">
            <Paper>
              <Typography variant="h6" component="h3" gutterBottom>
                {title}
              </Typography>
              <Typography variant="subtitle1" gutterBottom>
                {letterCounter(description, 200)}
              </Typography>
              <Typography variant="subtitle1" gutterBottom>
                Preço: R$ {prices}
              </Typography>
            </Paper>

            <Paper sx={{ marginTop: "1.5rem" }}>
              <Typography variant="subtitle1" gutterBottom>
                Dados da compra:
              </Typography>
              <Box flexGrow={1}>{props.children}</Box>
            </Paper>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default ComicDetail;
