import { useState } from "react";
import { AxiosError } from "axios";
import { useRouter } from "next/router";
import { FormProvider, useForm } from "react-hook-form";
import {
  Box,
  Button,
  Step,
  StepLabel,
  Stepper,
  Typography,
} from "@mui/material";
import { useStepFormContext } from "../../contexts/steps";
import { QontoStepIcon } from "../../components/steps/QontoStepIcon";
import { QontoConnector } from "../../components/steps/Qontos";
import { zodResolver } from "@hookform/resolvers/zod";
import { checkoutSchema, zodInfer } from "../../features/checkout/schema";
import { urlInstance } from "../../services/axios/baseURL";
import { ModalMUI } from "../../components/modal";
import { useCartContext } from "../../contexts/cart";
import { ComicDetailSteps } from "../../components/detailedCheckout";
import Head from "next/head";
import User from "../../features/checkout/User";
import Address from "../../features/checkout/Address";
import CreditCard from "src/features/checkout/CreditCart";
import LayoutCheckout from "src/components/layouts/layout-checkout";

export default function Checkout() {
  const steps = ["Dados Pessoais", "Endereço", "Pagamento"];

  const { currentStep, setFormData } = useStepFormContext();

  const [modalOpen, setModalOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const { cart } = useCartContext();

  const methods = useForm<zodInfer>({
    resolver: zodResolver(checkoutSchema),
    shouldUseNativeValidation: false,
    mode: "all",
  });

  const { push } = useRouter();

  const submitForm = async (data: zodInfer) => {
    try {
      await urlInstance.post("/checkout", {
        ...data,
      });

      setFormData(data);
      push("/checkout/success");
    } catch (error) {
      if (error instanceof AxiosError) {
        const { response } = error;
        const message = await response?.data.message;
        setErrorMessage(message);
        setModalOpen(true);
      }
    }
  };

  return (
    <>
      <Head>
        <title>Marvel Comics</title>
        <meta name="description" content="Marvel Comics - CTD" />
        <link rel="icon" href="/marvel-comics.png" />
      </Head>
      <LayoutCheckout>
      <FormProvider {...methods}>
        <form
          onSubmit={methods.handleSubmit(submitForm)}
          style={{
            width: "100%",
            paddingTop: "2rem",
            backgroundColor:'#495057'
          }}
        >
          <Stepper
            alternativeLabel
            activeStep={currentStep}
            connector={<QontoConnector />}
          >
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel StepIconComponent={QontoStepIcon}>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>

          {currentStep === 0 && <User />}

          {currentStep === 1 && <Address />}

          {currentStep === 2 && <CreditCard />}

          <Box>
            {cart && (
              <ComicDetailSteps
                title={cart.title}
                thumbnail={cart.thumbnail}
                prices={cart.prices}
                stock={cart.stock}
                description={cart.description}
              />
            )}
          </Box>
        </form>
      </FormProvider>

      <ModalMUI
        open={modalOpen}
        onClose={() => {
          setErrorMessage("");
          setModalOpen(false);
        }}
      >
        <Box>
          <Typography>{errorMessage}</Typography>
          <Box
            style={{
              display: "flex",
              width: "100%",
              marginTop: "1rem",
              justifyContent: "center",
            }}
          >
            <Button onClick={() => setModalOpen(false)}>Fechar</Button>
          </Box>
        </Box>
      </ModalMUI>
      </LayoutCheckout>
    </>
  );
}
