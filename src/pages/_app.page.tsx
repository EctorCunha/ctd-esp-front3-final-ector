import type { AppProps } from "next/app";
import { CssBaseline, ThemeProvider } from "@mui/material";
import LayoutGeneral from "../components/layouts/layout-general";
import { theme } from "../styles/material-theme";
import { StepFormProvider } from "../contexts/steps";
import { CartProvider } from "../contexts/cart";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <LayoutGeneral>
        <StepFormProvider>
          <CartProvider>
            <Component {...pageProps} />
          </CartProvider>
        </StepFormProvider>
      </LayoutGeneral>
      <style jsx global>{`
        /* Other global styles such as 'html, body' etc... */

        #__next {
          height: 100%;
        }
      `}</style>
    </ThemeProvider>
  );
}

export default MyApp;
