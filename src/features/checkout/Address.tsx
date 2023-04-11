import { Box, Button } from "@mui/material";
import { useStepFormContext } from "../../contexts/steps";
import { FieldController } from "../../components/field-text/FieldController";
import React from "react";
import { FieldErrors, useFormContext } from "react-hook-form";
import { zodInfer } from "./schema";

export default function Address() {
  const {
    control,
    trigger,
    formState: { errors },
  } = useFormContext<zodInfer>();

  const { setStep } = useStepFormContext();

  const triggerErrors = async () => {
    const [nameValid, emailValid, lastnameValid] = await Promise.all([
      trigger("customer.address.address1"),
      trigger("customer.address.address2"),
      trigger("customer.address.city"),
      trigger("customer.address.state"),
      trigger("customer.address.zipCode"),
    ]);

    if (nameValid && emailValid && lastnameValid) {
      setStep(2);
    }
  };

  return (
    <Box
      display={"flex"}
      gap={"1rem"}
      flexDirection={"column"}
      width={"100%"}
      maxWidth={"350px"}
      margin={"0 auto"}
      paddingY={"4rem"}
      paddingX={"1.5rem"}
    >
      <FieldController
        inputProps={{ placeholder: "Endereço" }}
        control={control}
        defaultValue={""}
        name="customer.address.address1"
        label="Endereço"
        hookError={errors?.customer?.address?.address1}
      />

      <FieldController
        inputProps={{ placeholder: "Endereço 2" }}
        control={control}
        defaultValue={""}
        name="customer.address.address2"
        label="Endereço 2"
        hookError={errors?.customer?.address?.address2}
      />

      <FieldController
        inputProps={{ placeholder: "Cidade" }}
        control={control}
        defaultValue={""}
        name="customer.address.city"
        label="Cidade"
        hookError={errors?.customer?.address?.city}
      />

      <FieldController
        inputProps={{ placeholder: "Estado" }}
        control={control}
        defaultValue={""}
        name="customer.address.state"
        label="Estado"
        hookError={errors?.customer?.address?.state}
      />

      <FieldController
        inputProps={{ placeholder: "Código Postal" }}
        control={control}
        defaultValue={""}
        name="customer.address.zipCode"
        label="Código Postal"
        hookError={errors?.customer?.address?.zipCode}
      />

      <Button variant="contained" type="submit" onClick={() => setStep(0)}>
        Voltar
      </Button>

      <Button variant="contained" onClick={triggerErrors}>Próximo</Button>
    </Box>
  );
}
