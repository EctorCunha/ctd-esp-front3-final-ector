import { Box, Paper, Typography} from "@mui/material";
import Image from "next/image";
import { CheckoutInput } from "src/features/checkout/checkout.types";
import { Comic } from "src/types/getComic";

export default function Products({
  thumbnail,
  title,
  prices,
}: Comic, onChange: CheckoutInput) {
  const thumb = `${thumbnail.path}.${thumbnail.extension}`;

  return (
    <Box p={4}>
      <Paper elevation={3} sx={{display:'flex'}}>
        <Typography variant="body1" p={2} sx={{margin:'auto'}}>
          {title}
        </Typography>
          {prices.map((price) => {
            return (
                <Typography sx={{margin:'auto', padding:'1rem'}}>{`R$${price.price}`}</Typography>
            );
          })}
        <Image src={thumb} width={100} height={80} />
      </Paper>
    </Box>
  );
}

