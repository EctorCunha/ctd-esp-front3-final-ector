import React from "react";
import { Grid, Paper, Box, Typography } from "@mui/material";
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

export const ComicDetailSteps = (props: ComicDetail) => {
  const { description, prices, stock, thumbnail, title } = props;

  return (
    <>
      <Grid container spacing={2} maxWidth={"600px"} margin={"auto"}>
        <Grid item xs={12} md={5}>
          <Image src={thumbnail} height={200} width={200} />
        </Grid>
        <Grid item xs={12} md={7}>
          <Box display="flex" flexDirection="column" height="100%" marginRight={"15px"}>
            <Paper sx={{display:'flex', justifyContent: 'center', alignItems:'center', flexDirection:'column' , padding:'1rem'}}>
              <Typography variant="h6" component="h3" gutterBottom>
                {title}
              </Typography>
              <Typography variant="subtitle1" gutterBottom>
                {letterCounter(description, 200)}
              </Typography>
              <Typography variant="subtitle1" gutterBottom>
                <b>Preço: R$ {prices}</b>
              </Typography>
            </Paper>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};
