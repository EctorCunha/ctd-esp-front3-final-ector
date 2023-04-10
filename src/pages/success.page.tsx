import Success from "../components/success";
import { Box } from "@mui/material";
import { Comic } from "src/types/getComic";
import { CheckoutInput } from "../features/checkout/checkout.types";

export default function Index() {
  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <Success customer={{
        firstname: "",
        lastname: "",
        email: "",
        address: {
          address1: "",
          address2: null,
          city: "",
          state: "",
          zipCode: ""
        }
      }} card={{
        number: "",
        cvc: "",
        expDate: "",
        nameOnCard: ""
      }} order={{
        name: "",
        image: "",
        price: 0
      }} />
    </Box>
  );
}
