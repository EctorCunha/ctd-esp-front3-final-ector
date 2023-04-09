import Success from "src/components/success";
import { Box } from "@mui/material";
import { Comic } from "src/types/getComic";
import { CheckoutInput } from "src/features/checkout/checkout.types";

export default function Index(values: CheckoutInput) {
  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <Success /* title={title} thumbnail={thumbnail}  */ values={values} />
    </Box>
  );
}
