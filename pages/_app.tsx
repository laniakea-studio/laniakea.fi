import type { ReactElement, ReactNode } from "react";
import type { NextPage } from "next";
import type { AppProps } from "next/app";
import Head from "next/head";
import "../styles/normalize.css";
import GlobalStyle from "../styles/global";
import Layout from "../components/Layout";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
export default MyApp;
