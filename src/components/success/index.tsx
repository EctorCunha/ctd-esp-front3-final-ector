import { Box,Typography, Button, Alert } from "@mui/material";
import { CheckoutInput } from "src/features/checkout/checkout.types";

export default function Success(values: CheckoutInput) {
  console.log(values)

  return (
    <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', width: "100%", gap:'2rem' }}>
      <Alert severity="success">
      Aproveite sua compra.
      </Alert>
      {/* {
        values.map((value:any) => {
          return (
            <>
            <Typography variant="h4" sx={{margin:'auto', padding:'1rem'}}>{value.firstname}</Typography>
            <Typography variant="h4" sx={{margin:'auto', padding:'1rem'}}>{value.lastname}</Typography>
            </>
          )
        })
      } */}
      {/* <Typography>{values}</Typography> */}
      {/* <Typography variant="h4" sx={{margin:'auto', padding:'1rem'}}>{title}</Typography> */}
      {/* <Image src={thumb} width={100} height={80} /> */}
      <Button variant="contained" href="/">Voltar à página inicial</Button>
    </Box>
  );
}
