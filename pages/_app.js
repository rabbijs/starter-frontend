import Router, { useRouter } from "next/router";
import { useState } from "react";
import Script from "next/script";
import { ThemeProvider } from "next-themes";
import "../styles/globals.css";
import { SplashScreen } from "../components";
import { RelayProvider } from "../context/RelayContext";
import { TuneProvider } from "../context/TuningContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { TwetchProvider } from "../context/TwetchContext";
import { BitcoinProvider } from "../context/BitcoinContext";

function MyApp({ Component, pageProps }) {
  /*  const [loading, setLoading] = useState(false);
  const router = useRouter();

  Router.events.on("routeChangeStart", (url) => {
    if (url.startsWith("/t")) {
      setLoading(true);
    }
  });
  Router.events.on("routeChangeComplete", (url) => {
    setLoading(false);
  }); */

  return (
    <>
      <Script
        src="https://one.relayx.io/relayone.js"
        strategy="beforeInteractive"
      />
      <ThemeProvider
        attribute="class"
        enableSystem={false}
        disableTransitionOnChange
      >
        <TwetchProvider>
          <RelayProvider>
            <BitcoinProvider>
              <TuneProvider>
                <Component {...pageProps} />
              </TuneProvider>
            </BitcoinProvider>
          </RelayProvider>
        </TwetchProvider>
        <ToastContainer />
      </ThemeProvider>
    </>
  );
}

export default MyApp;