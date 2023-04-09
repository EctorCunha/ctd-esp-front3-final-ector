import { useState } from "react";
import { useRouter } from "next/router";
import { Box, Stepper, Step, StepLabel, Button } from "@mui/material";
import Products from "../Products";
import Delivery from "../Delivery";
import Payment from "../Payment";
import Address from "../Address";
import { Comic } from "src/types/getComics";
import { CheckoutInput } from "src/features/checkout/checkout.types";
import handler from "src/pages/api/checkout.route";
import axios from "axios";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { userSchema } from "src/services/checkout/checkoutUser";
import { Formik } from "formik";

export default function Steps({ thumbnail, title, prices, id }: Comic) {
  const [currentStep, setCurrentStep] = useState(0);
  const [proximo, setProximo] = useState("Próximo");
  const [values, setValues] = useState({} as CheckoutInput);
  const { back, push } = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CheckoutInput>({
    resolver: yupResolver(userSchema),
  });

  const createMessageRequest: SubmitHandler<CheckoutInput> = async (
    values,
    e
  ) => {
    alert("Mensagem enviada com sucesso!");
    console.log(values);
    e?.target.reset();
    // await fetch("jasodajsdlk");
  };

  function onChange(ev: any) {
    const { name, value } = ev.target;
    setValues({ ...values, [name]: value });
    // console.log(values)
  }

  const api = "http://localhost:3000/api/checkout";

  function StepBack() {
    setCurrentStep(currentStep - 1);
    if (currentStep === 0) {
      back();
    }
  }

  function StepNext() {
    setCurrentStep(currentStep + 1);

    if (currentStep >= 2) {
      setProximo("Enviar");
    }

    if (currentStep >= 3) {
      // Pegar as informações do produto e dos formulários e enviar e depois mostrar na página de sucesso
      // axios.post('http://localhost:3000/api/checkout', values)
      // handler(api,values)
      push(`/success/`);
    }
  }

  return (
        <Box sx={{ width: "100%" }}>
          <Stepper activeStep={currentStep}>
            <Step>
              <StepLabel>Produtos</StepLabel>
            </Step>
            <Step>
              <StepLabel>Endereço</StepLabel>
            </Step>
            <Step>
              <StepLabel>Método de entrega</StepLabel>
            </Step>
            <Step>
              <StepLabel>Pagamento</StepLabel>
            </Step>
          </Stepper>

          {currentStep === 0 && (
            <Products
              title={title}
              thumbnail={thumbnail}
              prices={prices}
              onChange={onChange}
            />
          )}
          {currentStep === 1 && <Address onChange={onChange} />}
          {currentStep === 2 && <Delivery onChange={onChange} />}
          {currentStep === 3 && <Payment onChange={onChange} />}
          <Box sx={{ display: "flex", justifyContent: "space-around" }}>
            <Button variant="contained" onClick={StepBack}>
              Voltar
            </Button>
            <Button variant="contained" type="submit" onClick={StepNext}>
              {proximo}
            </Button>
          </Box>
        </Box>
  );
}
