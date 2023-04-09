
import { Card, Container, Stack, TextField } from "@mui/material";
import { CheckoutInput } from "../../../features/checkout/checkout.types";

export default function Address({customer, onChange}: CheckoutInput) {
  return (
    <Card sx={{ margin: 2, padding: 2 }}>
      <Container sx={{ display: "flex", justifyContent: "center" }}>
        <Stack
          component="form"
          sx={{
            width: "50vw",
          }}
          spacing={2}
          noValidate
          autoComplete="off"
        >
          <TextField
            value={customer?.firstname}
            name='firstname'
            onChange={onChange}
            type="text"
            label="Primeiro nome"
            variant="standard"
          />
          <TextField value={customer?.lastname} name='lastname' onChange={onChange} type="text" label="Último nome" variant="standard" />
          <TextField value={customer?.email} name='email' onChange={onChange} type="email" label="E-mail" variant="standard" />
          <TextField
            value={customer?.address?.address1}
            name='address1'
            onChange={onChange}
            type="text"
            label="Endereço"
            variant="standard"
          />
          <TextField
            value={customer?.address?.address2}
            name='address2'
            onChange={onChange}
            type="text"
            label="Apartamento, Casa, ou outros"
            variant="standard"
          />
          <TextField
            value={customer?.address.city}
            name='city'
            onChange={onChange}
            type="text"
            label="Cidade"
            variant="standard"
          />
          <TextField
            value={customer?.address.state}
            name='state'
            onChange={onChange}
            type="text"
            label="Estado"
            variant="standard"
          />
          <TextField
            value={customer?.address.zipCode}
            name='zipCode'
            onChange={onChange}
            label="CEP"
            variant="standard"
          />
        </Stack>
      </Container>
    </Card>
  );
}
