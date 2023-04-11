import { Alert, Box, Button, Typography } from "@mui/material";
import { useCartContext } from "../../contexts/cart";
import { useStepFormContext } from "../../contexts/steps";
import ComicDetail from "../../components/comic-sucess-detailed";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import Head from "next/head";

interface Props {
  data: Record<string, any>;
}

function KeyValueTypography({ data }: Props) {
  return (
    <>
      {Object.entries(data).map(([key, value]) => (
        <Typography key={key}>
          <strong>{key}: </strong>
          {typeof value === "object" ? (
            <KeyValueTypography data={value} />
          ) : (
            value
          )}
        </Typography>
      ))}
    </>
  );
}

export default function Success() {
  const { cart } = useCartContext();
  const { formData, setStep } = useStepFormContext();

  const { push } = useRouter();

  useEffect(() => {
    setStep(0);
  }, []);

  return (
    <>
      <Head>
        <title>Marvel Comics</title>
        <meta name="description" content="Marvel Comics - CTD" />
        <link rel="icon" href="/marvel-comics.png" />
      </Head>
      <Box
        display={"flex"}
        paddingX={"1.5rem"}
        flexDirection={"column"}
        gap={"2rem"}
      >
        <Box display={"flex"} justifyContent={"center"}>
          <Alert severity="success">Aproveite sua compra</Alert>
        </Box>

        <Box>
          {cart && (
            <ComicDetail
              title={cart.title}
              thumbnail={cart.thumbnail}
              prices={cart.prices}
              stock={cart.stock}
              description={cart.description}
            >
              {formData && <KeyValueTypography data={formData} />}
            </ComicDetail>
          )}
        </Box>

        <Button variant="contained" onClick={() => push("/")}>
          Voltar
        </Button>
      </Box>
    </>
  );
}
