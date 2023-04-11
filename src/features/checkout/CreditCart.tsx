import React from "react";
import { Box, Button } from "@mui/material";
import { useFormContext } from "react-hook-form";
import { useRouter } from "next/router";
import Cards from "react-credit-cards-2";
import { FieldController } from "../../components/field-text/FieldController";
import { zodInfer } from "./schema";
import FieldInputMaskController from "../../components/field-mask/FieldMaskController";
import { useStepFormContext } from "../../contexts/steps";
import "react-credit-cards-2/dist/es/styles-compiled.css";

export default function CreditCard(){
  const {
    control,
    trigger,
    watch,
    formState: { errors },
  } = useFormContext<zodInfer>();

  const { card } = watch();

  const { setStep } = useStepFormContext();

  const {push} = useRouter()

  const triggerErrors = async () => {
    const [nameValid, emailValid, lastnameValid] = await Promise.all([
      trigger("card.number"),
      trigger("card.cvc"),
      trigger("card.expDate"),
      trigger("card.nameOnCard"),
    ]);

    if (nameValid && emailValid && lastnameValid) {
      return true;
    }

    return false;
  };

  const go = () => {
    triggerErrors();
    push('/checkout/success')
  }

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
      <Cards
        number={card?.number ?? ""}
        expiry={card?.expDate ?? ""}
        cvc={card?.cvc ?? ""}
        name={card?.nameOnCard ?? ""}
      />

      <FieldInputMaskController
        mask={"9999 9999 9999 9999"}
        inputProps={{ placeholder: "Número" }}
        control={control}
        name="card.number"
        placeholder="Número"
        defaultValue={""}
        label="Número"
        hookError={errors?.card?.number}
      />
      
      <FieldController
        inputProps={{ placeholder: "Nome" }}
        control={control}
        name="card.nameOnCard"
        defaultValue={""}
        label="Nome"
        hookError={errors?.card?.nameOnCard}
      />

      <FieldInputMaskController
        mask={"999"}
        inputProps={{ placeholder: "CVC" }}
        control={control}
        name="card.cvc"
        placeholder="CVC"
        defaultValue={""}
        label="CVC"
        hookError={errors?.card?.cvc}
      />

      <FieldInputMaskController
        mask={"99/99"}
        inputProps={{ placeholder: "Vencimento" }}
        control={control}
        placeholder="Vencimento"
        name="card.expDate"
        defaultValue={""}
        label="Vencimento"
        hookError={errors?.card?.expDate}
      />


      <Button variant="contained" onClick={() => setStep(1)}>
        Voltar
      </Button>

      <Button variant="contained" type="submit" onClick={go} >
        Finalizar
      </Button>
    </Box>
  );
};
