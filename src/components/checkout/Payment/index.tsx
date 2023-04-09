import { Card, Container, Stack, TextField } from "@mui/material";
import { CheckoutInput } from "../../../features/checkout/checkout.types";
import { FormProvider, useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { cartSchema } from "src/services/checkout/checkoutUser";

export default function Payment({ card, onChange }: CheckoutInput) {
  const methods = useForm<CheckoutInput>({ resolver: yupResolver(cartSchema) });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CheckoutInput>({
    resolver: yupResolver(cartSchema),
  });

  const createMessageRequest: SubmitHandler<CheckoutInput> = async (
    values,
    e
  ) => {
    alert("Mensagem enviada com sucesso!");
    console.log(values);
    e?.target.reset();
    // await fetch("/api/checkout");
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(createMessageRequest)}>
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
                value={card?.number}
                name="number"
                onChange={onChange}
                type="strtexting"
                label="Número do Cartão"
                variant="standard"
              />
              <TextField
                value={card?.nameOnCard}
                name="nameOnCard"
                onChange={onChange}
                type="text"
                label="Nome"
                variant="standard"
              />
              <TextField
                value={card?.expDate}
                name="expDate"
                onChange={onChange}
                type="text"
                label="Validate"
                variant="standard"
              />
              <TextField
                value={card?.cvc}
                name="cvc"
                onChange={onChange}
                type="text"
                label="CVV"
                variant="standard"
              />
            </Stack>
          </Container>
        </Card>
      </form>
    </FormProvider>
  );
}
