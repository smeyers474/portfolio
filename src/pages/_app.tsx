import { type AppType } from "next/app";
import Head from "next/head";

import { api } from "~/utils/api";

import "~/styles/globals.css";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>Sarah Meyers</title>
        <meta name="description" content="Portfolio created by Sarah Meyers" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </>
  );
};

export default api.withTRPC(MyApp);
