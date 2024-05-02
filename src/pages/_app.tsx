import { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

import "@/styles/globals.css";
import "@splidejs/splide/css";

import type { AppProps } from "next/app";
import { Toaster } from "react-hot-toast";

export default function App({ Component, pageProps }: AppProps) {
  // eslint-disable-next-line
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <Component {...pageProps} />
    </>
  );
}
