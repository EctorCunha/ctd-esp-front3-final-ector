import { Box, Button } from "@mui/material";
import { useStepFormContext } from "../../contexts/steps";
import { FieldController } from "../../components/field-text/FieldController";
import React from "react";
import { useFormContext } from "react-hook-form";
import { zodInfer } from "./schema";

export default function User() {
  const {
    control,
    trigger,
    formState: { errors },
  } = useFormContext<zodInfer>();

  const { setStep } = useStepFormContext();

  const triggerErrors = async () => {
    const [nameValid, emailValid, lastnameValid] = await Promise.all([
      trigger("customer.name"),
      trigger("customer.lastname"),
      trigger("customer.email"),
    ]);

    if (nameValid && emailValid && lastnameValid) {
      setStep(1);
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
        inputProps={{ placeholder: "Name" }}
        control={control}
        name="customer.name"
        defaultValue={""}
        label="Nome"
        hookError={errors?.customer?.name}
      />

      <FieldController
        inputProps={{ placeholder: "LastName" }}
        control={control}
        name="customer.lastname"
        defaultValue={""}
        label="Sobrenome"
        hookError={errors?.customer?.lastname}
      />

      <FieldController
        inputProps={{ placeholder: "Email", type: "email" }}
        control={control}
        label="E-mail"
        defaultValue={""}
        name="customer.email"
        hookError={errors?.customer?.email}
      />

      <Button variant="contained" onClick={triggerErrors}>Próximo</Button>
    </Box>
  );
}
